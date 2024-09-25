import createMDX from "fumadocs-mdx/config"
const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  assetPrefix: "./",
  images: {
    unoptimized: true,
  },
}

export default withMDX(config)
