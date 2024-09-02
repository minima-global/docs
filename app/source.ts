import { map } from "@/.map"
import Icon from "@/components/icon"
import { loader } from "fumadocs-core/source"
import { createMDXSource, defaultSchemas } from "fumadocs-mdx"
import { icons } from "lucide-react"
import { z } from "zod"




export const { getPage, getPages, pageTree } = loader({
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map, {
   
  }),
  icon(icon) {
 
    if (icon && icon in icons)
      return Icon({ icon: icons[icon as keyof typeof icons] })
  },
})
