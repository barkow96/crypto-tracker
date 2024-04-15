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
  env: {
    NEXTAUTH_SECRET: "fZ7Lww9ffvh/6mXmZqhEC4Xp5qaUrpL/yrHfU2GgcAw=",
    NEXTAUTH_URL: "http://localhost:3000",
  },
};

export default nextConfig;
