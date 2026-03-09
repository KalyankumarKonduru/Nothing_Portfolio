import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["http://[IP_ADDRESS]", "http://localhost:3000"],
};

export default nextConfig;
