import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/new-page", destination: "/faqs", permanent: true },
      { source: "/new-page-1", destination: "/insights", permanent: true },
      { source: "/content-events", destination: "/insights", permanent: true },
    ];
  },
};

export default nextConfig;
