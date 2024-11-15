import { Body } from "@/app/layout.client"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { Provider } from "@/components/provider"
import { headers } from "next/headers"
import "./global.css"
const inter = Inter({
  subsets: ["latin"],
})

export const dynamic = "force-dynamic"

export default function Layout({ children }: { children: ReactNode }) {
  const nonce = headers().get("x-nonce")
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <Body>
        <Provider nonce={nonce ?? undefined}>
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
