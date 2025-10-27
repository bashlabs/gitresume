/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "https://gitresume.app/",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/gitresume' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
