"use client"

import { useMode } from "@/app/layout.client"
import type { SharedProps } from "fumadocs-ui/components/dialog/search"
import SearchDialog from "fumadocs-ui/components/dialog/search-default"
import { modes } from "@/app/lib/modes"

export default function CustomSearchDialog(
  props: SharedProps
): React.ReactElement {
  return (
    <SearchDialog
      {...props}
      defaultTag={useMode() ?? "core"}
      tags={modes.map((mode) => ({
        name: mode.name,
        value: mode.param,
      }))}
    />
  )
}
