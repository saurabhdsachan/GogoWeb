const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withBundleAnalyzer(
  withPWA({
    swcMinify: true,
    compress: true,
    transpilePackages: ['ui'],
    reactStrictMode: true,
    poweredByHeader: false,
    crossOrigin: 'anonymous',
    images: {
      domains: ['res.cloudinary.com', 'images.unsplash.com'],
    },
  })
);
