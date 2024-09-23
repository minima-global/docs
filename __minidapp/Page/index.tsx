"use client";
import {MDXProvider} from "@mdx-js/react";
import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function Page() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const elem = document.getElementById(hash.substring(1));

            setTimeout(() => {
                if (elem) {
                    elem.scrollIntoView();
                }
            }, 200);
        }
    }, [hash]);

    // we remove the starting slash
    let correctedPathname = pathname.slice(1, pathname.length);

    let MDX;

    try {
        MDX = require(`../../content/${correctedPathname}.mdx`);
    } catch {
        if (!MDX) {
            MDX = require(`../../content/${correctedPathname}/index.mdx`);
        }
    }

    if (!MDX) {
        return null;
    }

    return (
        <div>
            <MDXProvider>
                <h1>{MDX.frontmatter.title}</h1>
                <MDX.default components={{
                    a(props: React.PropsWithChildren<{ href: string }>) {
                        return <Link to={props.href}>{props.children}</Link>
                    },
                    img(props: React.PropsWithChildren<{ alt: string; src: { height: string; width: string; src: string } }>) {
                        return <img alt={props.alt} src={props.src.src} loading="lazy" width={props.src.width} height={props.src.height} />
                    },
                    Card(props: React.PropsWithChildren<{ href: string; title: string; description: string }>) {
                        return (
                            <Link className="not-prose block rounded-lg border bg-fd-card p-4 text-sm text-fd-card-foreground shadow-md transition-colors hover:bg-fd-accent/80"
                                  to={props.href} onClick={() => window.scrollTo(0, 0)}><h3 className="mb-1 font-medium">{props.title}</h3><p className="text-fd-muted-foreground">{props.description}</p>
                            </Link>
                        )
                    }
                }}/>
            </MDXProvider>
        </div>
    )
}
