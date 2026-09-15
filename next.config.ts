import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["bcryptjs"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.output = {
        ...config.output,
        chunkLoadingGlobal: "webpackChunk_saec_guard",
      };
    }
    return config;
  },
};

export default nextConfig;

