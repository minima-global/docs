import createMDX from "fumadocs-mdx/config"
const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/docs/terms/minimatermsandconditions#cookies", 
        destination: "docs/core/website-terms#cookies", 
        permanent: true,
      },
      {
        source: "/docs/runanode/selectplatform/windows", 
        destination: "/docs/run-a-node/windows", 
        permanent: true,
      },
      {
        source: "/docs/runanode/selectplatform/android_v9_and_up", 
        destination: "/docs/run-a-node/android", 
        permanent: true,
      },
      {
        source: "/docs/runanode/selectplatform/mac", 
        destination: "/docs/run-a-node/mac", 
        permanent: true,
      },
      {
        source: "/docs/runanode/selectplatform/dockerdesktop", 
        destination: "/docs/run-a-node/docker-desktop", 
        permanent: true,
      },
      {
        source: "/docs/runanode/selectplatform/linux_vps", 
        destination: "/docs/run-a-node/linux-vps-docker", 
        permanent: true,
      },
      {
        source: "/docs/about/tokendistribution#maximize", 
        destination: "/docs/core/tokenomics#maximize", 
        permanent: true,
      },
      {
        source: "/docs/terms/minidappterms", 
        destination: "/docs/core/minidapp-terms", 
        permanent: true,
      },
      {
        source: "/docs/learn/minima/colouredcoins", 
        destination: "/docs/learn/coloured-coins", 
        permanent: true,
      },
      {
        source: "/docs/about/tokendistribution", 
        destination: "/docs/core/tokenomics", 
        permanent: true,
      },
      {
        source: "/docs/runanode/get_started", 
        destination: "/docs/run-a-node", 
        permanent: true,
      },
      {
        source: "/docs/buildonminima/dapptutorial/reactminidapp/", 
        destination: "/docs/development/react-minidapp", 
        permanent: true,
      },
      {
        source: "/docs/buildonminima/txntutorial/layer1/simpletxn/", 
        destination: "/docs/development/simple-txn", 
        permanent: true,
      },
      {
        source: "/docs/buildonminima/dapps/mdsjs", 
        destination: "/docs/development/minidapp-mdsjs", 
        permanent: true,
      },
      {
        source: "/docs/buildonminima/dapps/events", 
        destination: "/docs/development/minidapp-events", 
        permanent: true,
      },
      {
        source: "/docs/buildonminima/dappcontracts/", 
        destination: "/docs/development/future-cash", 
        permanent: true,
      },
      {
        source: "/docs/buildonminima/contracts/kissvm", 
        destination: "/docs/development/contracts-kissvm", 
        permanent: true,
      },
      {
        source: "/docs/buildonminima/dapps/overview", 
        destination: "/docs/development/minidapp-structure", 
        permanent: true,
      },
      {
        source: "/docs/buildonminima/contracts/txnbasics", 
        destination: "/docs/development/txnbasics", 
        permanent: true,
      },
      {
        source: "/docs/buildonminima/txntutorial/layer1/basiccontract", 
        destination: "/docs/development/layer1/basic-contract", 
        permanent: true,
      },
      {
        source: "/docs/buildonminima/txntutorial/start", 
        destination: "/docs/development/", 
        permanent: true,
      }      
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
