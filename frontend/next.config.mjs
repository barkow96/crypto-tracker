/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: "/api/strapi/:path*",
        destination: "http://localhost:1337/api/:path*",
      },
    ];
  },
};

export default nextConfig;
