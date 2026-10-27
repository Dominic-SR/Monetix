import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Tells Next.js to build a 100% client-side SPA bundle
  images: {
    unoptimized: true, // Required for static export if using next/image
  },
  cacheComponents: true,
  partialPrefetching: true,
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
