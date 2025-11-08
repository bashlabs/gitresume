/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  assetPrefix: isProd ? "https://gitresume.app/" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/gitresume" : "",
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
