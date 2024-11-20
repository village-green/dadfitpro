/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    // Add handling for undici module
    config.module.rules.push({
      test: /node_modules\/undici\/lib\/.*\.js$/,
      type: 'javascript/auto',
    });

    return config;
  },
};

module.exports = nextConfig;