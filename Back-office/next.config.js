/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "avatar.vercel.sh"],
  },
  experimental: {
    serverComponentsExternalPackages: ["@tremor/react"],
  },
};

module.exports = nextConfig;
