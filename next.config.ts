import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:year(\\d{4})/:slug",
        destination: "/words/:year/:slug",
      },
    ];
  },
};

export default nextConfig;
