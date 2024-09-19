import { Body } from "@/app/layout.client"
import type { ReactNode } from "react"
import { Provider } from "@/components/provider"

import "./global.css"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Body>
        <Provider>
          {/**
          *  <Banner className=" z-[9999] hidden lg:flex">
            Minima Docs v2 is here! 🎉
          </Banner>
          */}
          {children}
        </Provider>
      </Body>
    </html>
  )
}
