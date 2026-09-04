/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/thesis-stack",
  assetPrefix: "/thesis-stack/",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
