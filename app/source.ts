import { map } from "@/.map"
import Icon, { TypescriptIcon } from "@/components/icon"
import { loader } from "fumadocs-core/source"
import { createMDXSource, defaultSchemas } from "fumadocs-mdx"
import { icons } from "lucide-react"
import { z } from "zod"

const frontmatter = defaultSchemas.frontmatter.extend({
  tag: z.string(),
})

export const { getPage, getPages, pageTree } = loader({
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map, {
    schema: {
      frontmatter,
    },
  }),
  icon(icon) {
    if (icon && icon in icons) {
      return Icon({ icon: icons[icon as keyof typeof icons] })
    }

    if (icon === "Typescript") {
      return Icon({ icon: TypescriptIcon as any })
    }
  },
})
