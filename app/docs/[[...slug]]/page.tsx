import { DocsBody, DocsPage } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { source } from "@/app/source";
import defaultComponents from "fumadocs-ui/mdx";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Heading } from "fumadocs-ui/components/heading";
import { ThemeAwareSVG } from "@/components/theme-aware-svg";
import Link from "fumadocs-core/link";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Callout } from "fumadocs-ui/components/callout";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import {
  GoogelPlayIcon,
  SvgComponent,
  SvgComponent2,
  SvgComponentTest,
} from "@/components/images";
import { Separator } from "@/components/seperator";
import CommandTable from "@/components/table";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const path = `/content/docs/${page.file.path}`;

  return (
    <DocsPage
      toc={page.data.toc}
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
        <MDX
          components={{
            ...defaultComponents,
            ThemeAwareSVG,
            Tabs,
            Tab,
            ImageZoom,
            TypeTable,
            Accordion,
            Accordions,
            Heading,
            Link,
            SvgComponent,
            SvgComponent2,
            SvgComponentTest,
            Steps,
            Step,
            GoogelPlayIcon,
            CommandTable,
            Separator,
            Callout,
            pre: ({ ref: _ref, ...props }) => (
              <CodeBlock {...props}>
                <Pre className=" max-h-[400px]">{props.children}</Pre>
              </CodeBlock>
            ),
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    twitter: {
      card: "summary_large_image",
    },
  };
}
