import Link from "fumadocs-core/link";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { Heading } from "fumadocs-ui/components/heading";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Callout } from "fumadocs-ui/components/callout";
import defaultComponents from "fumadocs-ui/mdx";
import { TypeTable } from "fumadocs-ui/components/type-table";
import type { MDXComponents } from "mdx/types";
import {
  GoogelPlayIcon,
  SvgComponent,
  SvgComponent2,
  SvgComponentTest,
} from "@/components/images";
import { ThemeAwareSVG } from "@/components/theme-aware-svg";
import { Separator } from "@/components/seperator";
import CommandTable from "@/components/table";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    Link,
    ImageZoom,
    Heading,
    ul: (props) => <ul className=" pl-[1.6em]  indent-[-1.4em]  " {...props} />,
    SvgComponent,
    SvgComponent2,
    SvgComponentTest,
    Steps,
    Step,
    GoogelPlayIcon,
    CommandTable,
    Separator,
    Tabs,
    Tab,
    Accordions,
    Accordion,
    ThemeAwareSVG,
    TypeTable,
    Callout,
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre className=" max-h-[400px]">{props.children}</Pre>
      </CodeBlock>
    ),
  };
}
