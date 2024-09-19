import createMDX from "fumadocs-mdx/config"
const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  assetPrefix: "./",
}

export default withMDX(config)
