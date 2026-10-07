import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⛔️ Disable ESLint during build
  },
  output: 'export', // Static HTML export goes to ./out (build cache stays in ./.next)
  images: {
    unoptimized: true, // Required for static export
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/rapier', 'meshline'],
};

export default nextConfig;
