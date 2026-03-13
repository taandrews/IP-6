import { NextRequest, NextResponse } from "next/server";

// TODO: Integrate with AWS SES for email delivery
// TODO: Integrate with AWS DynamoDB to persist contact form submissions
// TODO: Add rate limiting to prevent abuse

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const { firstName, lastName, email, subject, message } = body;

    // Validate required fields
    if (!firstName || !firstName.trim()) {
      return NextResponse.json(
        { error: "First name is required" },
        { status: 400 }
      );
    }

    if (!lastName || !lastName.trim()) {
      return NextResponse.json(
        { error: "Last name is required" },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (!subject || !subject.trim()) {
      return NextResponse.json(
        { error: "Subject is required" },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // TODO: Send email via AWS SES
    // TODO: Store submission in AWS DynamoDB
    // For now, log the submission and return success
    console.log("Contact form submission:", {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: body.phone?.trim() || "",
      subject: subject.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We will get back to you soon.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
