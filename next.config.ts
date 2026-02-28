import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.foodandwine.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bekesiburgerbar.hu',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.nutella.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
