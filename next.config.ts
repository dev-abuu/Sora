import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/treatments", destination: "/for-businesses", permanent: true },
      { source: "/experiences", destination: "/for-businesses", permanent: true },
      { source: "/therapists", destination: "/for-therapists", permanent: true },
      { source: "/booking", destination: "/request-staff", permanent: true },
    ];
  },
};

export default nextConfig;
