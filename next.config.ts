import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⛔️ Disable ESLint during build
  },
  output: 'export', // Export to static HTML files
  distDir: 'out', // Output to the 'out' directory
  images: {
    unoptimized: true, // Required for static export
  },
  // Add this if you need a base path for GitHub Pages
  // basePath: '/your-repo-name',
};

export default nextConfig;
