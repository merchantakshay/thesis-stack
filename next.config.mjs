/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/thesis-stack.github.io",
  assetPrefix: "/thesis-stack.github.io/",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
