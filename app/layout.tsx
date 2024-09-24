import { Body } from "@/app/layout.client"
import type { ReactNode } from "react"
import { Provider } from "@/components/provider"

import "./global.css"
import MiniDappIndex from "__minidapp"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Body>
        <Provider>
          <MiniDappIndex />
          {/**
            * Banner className=" z-[9999] hidden lg:flex">
                Minima Docs v2 is here! 🎉
              </Banner>
            */}
          <div className="hidden">{children}</div>
        </Provider>
      </Body>
    </html>
  )
}
