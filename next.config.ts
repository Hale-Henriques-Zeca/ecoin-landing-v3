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
    // 👇 mantém otimização padrão do Next
    unoptimized: false,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  poweredByHeader: false,

  reactStrictMode: true,
};

export default nextConfig;
