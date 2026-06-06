import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/index.html" },
        { source: "/about-us", destination: "/about-us.html" },
        { source: "/catering", destination: "/catering.html" },
        { source: "/private-events", destination: "/private-events.html" },
        { source: "/contact-us", destination: "/contact-us.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;