# IP-6 Research - AWS Infrastructure Setup Guide

Complete setup instructions for deploying the IP-6 Research website on AWS.

---

## Prerequisites

- AWS account with billing enabled
- AWS CLI v2 installed and configured
- AWS SAM CLI installed
- Node.js 20.x and npm
- Git repository connected to the project

---

## 1. AWS Account Setup & CLI Configuration

```bash
# Install AWS CLI v2
# https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

# Configure credentials
aws configure
# Enter: AWS Access Key ID, Secret Access Key, Region (us-east-1), Output format (json)

# Verify configuration
aws sts get-caller-identity
```

Create an IAM user or role with the following service permissions:
- DynamoDB
- Lambda
- API Gateway
- S3
- SES
- CloudFront
- Route 53
- ACM (Certificate Manager)
- CloudFormation
- IAM (for role creation)
- Amplify

---

## 2. Domain Registration / Transfer to Route 53

**Option A - Register a new domain:**
1. Go to Route 53 console > Registered domains > Register domain
2. Search for `ip6research.com` and complete purchase
3. Route 53 automatically creates a hosted zone

**Option B - Transfer an existing domain:**
1. Unlock the domain at your current registrar
2. Obtain the transfer authorization code
3. Go to Route 53 console > Registered domains > Transfer domain
4. Enter the domain and authorization code
5. Confirm the transfer via the registrant email
6. Wait for transfer completion (can take up to 7 days)

**Option C - Use external registrar:**
1. Deploy the Route 53 stack to create the hosted zone (see step 8)
2. Copy the NS records from the hosted zone
3. Update your registrar's nameservers to the Route 53 NS values
4. Wait for DNS propagation (up to 48 hours)

---

## 3. ACM Certificate Request & DNS Validation

The certificate **must** be created in `us-east-1` for CloudFront compatibility.

```bash
# Request a certificate covering both apex and www
aws acm request-certificate \
  --region us-east-1 \
  --domain-name ip6research.com \
  --subject-alternative-names "www.ip6research.com" \
  --validation-method DNS

# Note the CertificateArn from the output
```

1. Go to ACM console (us-east-1) > select the pending certificate
2. Click "Create records in Route 53" to auto-create CNAME validation records
3. Wait for status to change from "Pending validation" to "Issued" (usually 5-30 minutes)
4. Copy the certificate ARN - you will need it for `cloudfront.json`

---

## 4. SES Sender Verification & Sandbox Exit

**Verify the sender email:**
```bash
aws ses verify-email-identity --email-address noreply@ip6research.com
# Check inbox and click the verification link
```

**Verify the receiving email (required while in sandbox):**
```bash
aws ses verify-email-identity --email-address your-contact@email.com
```

**Request production access (exit sandbox):**
1. Go to SES console > Account dashboard > Request production access
2. Fill in:
   - Mail type: Transactional
   - Website URL: https://ip6research.com
   - Use case description: Contact form submissions from research website
   - Expected sending volume: < 100 emails/day
3. Wait for approval (usually 24 hours)

---

## 5. Amplify App Creation & Git Repository Connection

1. Go to AWS Amplify console
2. Click "New app" > "Host web app"
3. Select your Git provider and authorize access
4. Choose the repository and branch (`main`)
5. When prompted for build settings, select "Use existing build spec" - the `amplify.yml` file in `infra/` will be detected, or copy its contents into the build settings
6. Set the app name to `ip6-research-website`
7. Deploy

**Configure custom domain in Amplify:**
1. Go to App settings > Domain management
2. Add domain: `ip6research.com`
3. Configure subdomains: apex (`ip6research.com`) and `www`
4. Amplify will provide CNAME records - add them to Route 53

---

## 6. SAM Deployment Commands

```bash
# Navigate to the infra directory
cd infra

# Build the SAM application
sam build --template-file template.yaml

# Deploy to dev environment
sam deploy \
  --template-file template.yaml \
  --stack-name ip6-research-dev \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides \
    Environment=dev \
    SenderEmail=noreply@ip6research.com \
    ContactEmail=your-contact@email.com \
  --resolve-s3

# Deploy to production
sam deploy \
  --template-file template.yaml \
  --stack-name ip6-research-prod \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides \
    Environment=prod \
    SenderEmail=noreply@ip6research.com \
    ContactEmail=your-contact@email.com \
  --resolve-s3

# View stack outputs (API endpoint, table name, bucket name)
aws cloudformation describe-stacks \
  --stack-name ip6-research-prod \
  --query 'Stacks[0].Outputs'
```

---

## 7. CloudFront Distribution Creation

1. Edit `infra/cloudfront.json`:
   - Replace `AMPLIFY_APP_ID` with your actual Amplify app ID
   - Replace `ACCOUNT_ID` and `CERTIFICATE_ID` in the ACM ARN with real values
   - Update the S3 bucket origin domain if using a different region

2. Create the distribution:
```bash
aws cloudfront create-distribution \
  --distribution-config file://cloudfront.json
```

3. Note the distribution domain name (e.g., `d111111abcdef8.cloudfront.net`) and distribution ID
4. Wait for the distribution status to become "Deployed" (can take 15-30 minutes):
```bash
aws cloudfront get-distribution --id DISTRIBUTION_ID --query 'Distribution.Status'
```

---

## 8. Route 53 DNS Configuration

**Option A - Deploy via CloudFormation:**
```bash
aws cloudformation deploy \
  --template-file route53.json \
  --stack-name ip6-research-dns \
  --parameter-overrides \
    CloudFrontDistributionDomainName=d111111abcdef8.cloudfront.net
```

**Option B - Manual setup:**
1. Go to Route 53 console > Hosted zones > ip6research.com
2. Create an A record:
   - Record name: (leave blank for apex)
   - Record type: A
   - Toggle "Alias" ON
   - Route traffic to: CloudFront distribution
   - Select the distribution
3. Repeat for AAAA record (IPv6)
4. Repeat both A and AAAA for `www.ip6research.com`

---

## 9. Environment Variables in Amplify

Go to Amplify console > App settings > Environment variables and add:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_API_ENDPOINT` | The API Gateway endpoint from SAM outputs |
| `NEXT_PUBLIC_ASSETS_URL` | The S3 bucket URL or CloudFront URL for assets |
| `NEXT_PUBLIC_SITE_URL` | `https://ip6research.com` |

After adding variables, trigger a new build for them to take effect.

---

## 10. S3 Bucket CORS & Policy Setup

The SAM template handles CORS and bucket policy automatically. To verify:

```bash
# Check CORS configuration
aws s3api get-bucket-cors \
  --bucket ip6-research-assets-bucket-prod

# Check bucket policy
aws s3api get-bucket-policy \
  --bucket ip6-research-assets-bucket-prod

# Upload assets to the bucket
aws s3 sync ./public/assets s3://ip6-research-assets-bucket-prod/assets/ \
  --cache-control "public, max-age=604800"
```

---

## 11. Testing Checklist

### DNS & SSL
- [ ] `https://ip6research.com` loads correctly
- [ ] `https://www.ip6research.com` redirects or loads correctly
- [ ] SSL certificate is valid and shows correct domain
- [ ] HTTP requests redirect to HTTPS

### Pages
- [ ] Home page (`/`) loads
- [ ] About page (`/about`) loads
- [ ] Benefits page (`/benefits`) loads
- [ ] Contact page (`/contact`) loads
- [ ] FAQ page (`/faq`) loads
- [ ] News page (`/news`) loads
- [ ] Science page (`/science`) loads
- [ ] Scientist page (`/scientist`) loads
- [ ] 404 page displays for invalid routes

### Contact Form
- [ ] Form submission sends data to API Gateway
- [ ] Lambda function processes the request
- [ ] Submission is stored in DynamoDB
- [ ] Confirmation email is sent via SES
- [ ] Notification email is received at contact address
- [ ] CORS headers are present in API response
- [ ] Form validation works on client side

### Performance
- [ ] Static assets served from CloudFront with correct cache headers
- [ ] `/_next/static/*` files have long cache TTL
- [ ] S3 assets load through CloudFront
- [ ] Page load time under 3 seconds

### SEO
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] Meta tags present on all pages

### Infrastructure
- [ ] CloudWatch logs are generated by Lambda
- [ ] DynamoDB TTL is cleaning up old records
- [ ] S3 bucket is publicly readable for assets
- [ ] IAM roles follow least-privilege principle

---

## Resource Naming Convention

All resources use the `ip6-research-` prefix:

| Resource | Name Pattern |
|---|---|
| DynamoDB Table | `ip6-research-contact-table-{env}` |
| Lambda Function | `ip6-research-contact-function-{env}` |
| Lambda Role | `ip6-research-lambda-role-{env}` |
| API Gateway | `ip6-research-api-{env}` |
| S3 Bucket | `ip6-research-assets-bucket-{env}` |
| CloudFront | `ip6-research-cdn` |
| Amplify App | `ip6-research-website` |

---

## Cleanup

To tear down all resources:

```bash
# Delete SAM stack
aws cloudformation delete-stack --stack-name ip6-research-prod

# Delete DNS stack
aws cloudformation delete-stack --stack-name ip6-research-dns

# Delete CloudFront distribution (must disable first)
aws cloudfront get-distribution-config --id DISTRIBUTION_ID > dist-config.json
# Edit dist-config.json: set Enabled to false, then update
aws cloudfront update-distribution --id DISTRIBUTION_ID --distribution-config file://dist-config.json --if-match ETAG
# Wait for deployment, then delete
aws cloudfront delete-distribution --id DISTRIBUTION_ID --if-match ETAG

# Empty and delete S3 bucket
aws s3 rm s3://ip6-research-assets-bucket-prod --recursive
aws s3api delete-bucket --bucket ip6-research-assets-bucket-prod

# Delete Amplify app from the console
```
