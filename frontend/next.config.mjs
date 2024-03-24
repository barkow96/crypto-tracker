/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: process.env.BACKEND_URL,
      },
    ];
  },
};

export default nextConfig;
