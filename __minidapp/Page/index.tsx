"use client"
import { MDXProvider } from "@mdx-js/react"
import { useLocation } from "react-router-dom"
import {PropsWithChildren, useEffect} from "react"
import { useMDXComponents } from "@/mdx-components"
import { Link } from "react-router-dom";

export default function Page() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const elem = document.getElementById(hash.substring(1))

      setTimeout(() => {
        if (elem) {
          elem.scrollIntoView()
        }
      }, 200)
    }
  }, [hash])

  // we remove the starting slash
  let correctedPathname = pathname.slice(1, pathname.length)

  let MDX

  try {
    MDX = require(`../../content/${correctedPathname}.mdx`)
  } catch {
    if (!MDX) {
      MDX = require(`../../content/${correctedPathname}/index.mdx`)
    }
  }

  if (!MDX) {
    return null
  }

  const components = useMDXComponents({})

  return (
    <div>
      <MDXProvider>
        <h1>{MDX.frontmatter.title}</h1>
        <MDX.default
          components={{
            ...components,
            a: (props: PropsWithChildren<{ href: string }>) => {
              return (
                  <Link {...props} to={props.href}>
                    {props.children}
                  </Link>
              )
            }
          }}
        />
      </MDXProvider>
    </div>
  )
}
