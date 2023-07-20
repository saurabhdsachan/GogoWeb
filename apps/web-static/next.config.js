const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE == 'TRUE',
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
