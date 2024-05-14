import dotenv from "dotenv";
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: "/api/strapi/:path*",
        destination: process.env.BACKEND_URL,
      },
    ];
  },
};

export default nextConfig;
