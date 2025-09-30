import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fundingpips.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
