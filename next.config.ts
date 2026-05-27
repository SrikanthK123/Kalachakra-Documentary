import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Kalachakra-Documentary',
  assetPrefix: '/Kalachakra-Documentary',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
