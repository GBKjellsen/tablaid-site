import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false,     // Disable Turbopack in Vercel
  },
  reactStrictMode: true,
};

export default nextConfig;
