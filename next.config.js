/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // Optimize bundle size
  swcMinify: true,
  // Reduce JavaScript execution time
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
