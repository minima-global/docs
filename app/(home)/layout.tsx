import { HomeLayout } from "fumadocs-ui/home-layout"
import type { ReactNode } from "react"
import { baseOptions } from "../layout.config"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Docs",
    template: "%s | Docs",
  },
  description: "The official documentation for Minima",
  twitter: {
    card: "summary_large_image",
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>
}
