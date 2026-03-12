import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'asset/source',
    });
    return config;
  },
  turbopack: {
    rules: {
      '*.yaml': {
        loaders: ['raw-loader'],
        as: '*.js',
      },
      '*.yml': {
        loaders: ['raw-loader'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
