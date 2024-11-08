"use client"
import { RootProvider } from "fumadocs-ui/provider"
import Script from "next/script"
import { ReactNode, useEffect, useState } from "react"

export function Provider({
  children,
  nonce,
}: {
  children: ReactNode
  nonce: string | undefined
}) {
  // prevent hydration error
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return <RootProvider theme={{ nonce: nonce }}>{children}</RootProvider>
}
