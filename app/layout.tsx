import { Body } from "@/app/layout.client"
import type { ReactNode } from "react"

import "./global.css"
import MiniDappIndex from "__minidapp"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Body>
          <MiniDappIndex />
      </Body>
    </html>
  )
}
