// @ts-check
import createMDX from 'fumadocs-mdx/config';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  eslint: {
    // Replaced by root workspace command
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
   
  },
  webpack: (config) => {
    config.module.noParse = [/typescript\/lib\/typescript.js/];
    return config;
  },
};

const withMDX = createMDX({
  buildSearchIndex: {
    filter: (v) => {
      return !v.match(/.+\.model\.mdx/)
    },
  },
});

export default withMDX(config)
