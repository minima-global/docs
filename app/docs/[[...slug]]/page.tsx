import { getPage, getPages } from "@/app/source"
import { DocsBody, DocsPage } from "fumadocs-ui/page"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

export default async function Page({
  params,
}: {
  params: { slug?: string[] }
}) {
  const page = getPage(params.slug)

  if (page == null) {
    notFound()
  }

  const MDX = page.data.exports.default

  const path = `/content/docs/${page.file.path}`

  /*const time = await getGithubLastEdit({
    owner: "minima-global",
    repo: "docs",
    path: path,
  });*/

  /*const lastUpdate = time?.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });*/

  return (
    <DocsPage
      toc={page.data.exports.toc}
      full={page.data.full}
      tableOfContent={{
        style: "clerk",
        single: false,
      }}
      editOnGithub={{
        owner: "minima-global",
        repo: "docs",
        sha: "main",
        path: path,
      }}
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }))
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug)

  if (page == null) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
    icons: page.data.icon,
  } satisfies Metadata
}
