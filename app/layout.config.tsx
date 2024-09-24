import { pageTree } from "@/app/source"
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle"
import type { HomeLayoutProps } from "fumadocs-ui/home-layout"
import { type DocsLayoutProps } from "fumadocs-ui/layout"
import { Logo } from "@/components/logo"
import { NavChildren } from "./layout.client"
import { modes } from "./lib/modes"

// shared configuration
export const baseOptions: HomeLayoutProps = {
  githubUrl: "https://github.com/minima-global",
  nav: {
    url: "/",
    title: (
      <Logo
        props={{
          className: "h-[30px] w-[120px] -mt-3",
        }}
        pathClassName="dark:fill-white fill-black"
      />
    ),
    transparentMode: "top",
    children: <NavChildren />,
  },
}

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,

  sidebar: {
    collapsible: false,
    banner: (
      <RootToggle
        options={modes.map((mode) => ({
          url: `/docs/${mode.param}`,
          icon: (
            <mode.icon
              key={mode.param}
              className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
              style={{
                backgroundColor: `hsl(var(--${mode.param}-color)/.3)`,
                color: `hsl(var(--${mode.param}-color))`,
              }}
            />
          ),
          title: mode.name,
          description: mode.description,
        }))}
      />
    ),
  },
}
