"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

interface ObserverProps {
  children: React.ReactNode
}

export default function Observer({ children }: ObserverProps) {
  const pathname = usePathname()

  useEffect(() => {
    const scrollToElement = () => {
      const hash = window.location.hash

      if (hash) {
        const id = hash.replace("#", "")

        let element = document.getElementById(id)

        if (!element) {
          element = document.querySelector(`a[href="#${id}"].peer`)
        }

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        } else {
          setTimeout(scrollToElement, 500)
        }
      }
    }

    setTimeout(scrollToElement, 100)

    const handleHashChange = () => {
      setTimeout(scrollToElement, 100)
    }

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [pathname])

  return <>{children}</>
}
