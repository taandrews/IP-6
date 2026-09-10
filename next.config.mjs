/** @type {import('next').NextConfig} */
const basePath=process.env.SITE_TARGET === 'sites' ? '' : (process.env.NEXT_PUBLIC_BASE_PATH ?? '/IP-6');
const nextConfig={output:'export',basePath,trailingSlash:true,env:{NEXT_PUBLIC_BASE_PATH:basePath},images:{unoptimized:true}};
export default nextConfig;