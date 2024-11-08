import { pageTree } from "@/app/source"
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle"
import type { HomeLayoutProps } from "fumadocs-ui/home-layout"
import { type DocsLayoutProps } from "fumadocs-ui/layout"
import { NavChildren } from "./layout.client"
import { modes } from "./lib/modes"

// shared configuration
export const baseOptions: HomeLayoutProps = {
  githubUrl: "https://github.com/minima-global",
  nav: {
    url: "/",
    title: (
      <div className="flex items-center gap-2 justify-center -mt-2">
        <svg
          width="40"
          height="40"
          viewBox="0 0 37 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`dark:fill-white fill-black transition-colors`}
        >
          <path
            d="M28.8727 9.20966L27.2806 16.2518L25.2445 7.7553L18.1105 4.86191L16.1816 13.3737L14.4823 3.39225L7.34831 0.51416L0 32.9998H7.79227L10.0427 23.0183L11.742 32.9998H19.5496L21.4632 24.488L23.4993 32.9998H31.2915L36.022 12.0877L28.8727 9.20966Z"
            fill="#currentColor"
          />
        </svg>
      </div>
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
