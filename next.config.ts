import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {},
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
    unoptimized: false,
  },

  typescript: {
    ignoreBuildErrors: true, // ignora erros de TypeScript no build
  },

  poweredByHeader: false,

  reactStrictMode: true,
};

export default nextConfig;