import createMDX from "fumadocs-mdx/config"
const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/docs/buildonminima/contracts/:path*",
        destination: "docs/development/:path*",
        permanent: true,
      },
      {
        source: "/docs/buildonminima/dapps/mdsjs",
        destination: "docs/development/:path*",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ]
  },
}

export default withMDX(config)
