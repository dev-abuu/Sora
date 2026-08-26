import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
