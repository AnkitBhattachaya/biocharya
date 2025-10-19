/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // remove unsupported options like appDir
  },
  images: {
    unoptimized: true, // forces Next.js to serve /public images directly
  },
};

module.exports = nextConfig;
