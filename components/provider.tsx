"use client"
import { RootProvider } from "fumadocs-ui/provider"
import dynamic from "next/dynamic"
import { ReactNode } from "react"


export function Provider({
  children,
}: {
  children: ReactNode
}): React.ReactElement {
  return (
    <RootProvider
      
    >
      {children}
    </RootProvider>
  )
}
