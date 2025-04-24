import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/portal/:path*',
        destination: process.env.NODE_ENV === 'production'
          ? 'https://example.com/portal/:path*' // Production URL
          : 'http://localhost:3000/:path*' // Development URL - points to Mantine app
      }
    ]
  }
};

export default nextConfig;
