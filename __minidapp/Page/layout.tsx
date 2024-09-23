"use client";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useTheme from "@/__minidapp/hooks/useTheme";
import useTitle from "@/__minidapp/hooks/useTitle";
import { MENU, SECTION_MENU } from "@/__minidapp/constants";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    useTitle();
    const location = useLocation();
    const [kebabOpen, setKebabOpen] = useState(false);
    const [sectionMenuOpen, setSectionMenuOpen] = useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const { toggleTheme } = useTheme();
    const ACTIVE: keyof typeof MENU = location.pathname.split("/").at(2)!.replaceAll("-", "_").toUpperCase();

    const activeMenu = MENU[ACTIVE];
    const activeSubMenu = SECTION_MENU.find(i => i.key === ACTIVE);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }, [location.pathname])

    return (
        <>
            <header id="nd-subnav"
                    className="sticky top-0 z-50 border-b transition-colors border-fd-foreground/10 bg-fd-background/60 backdrop-blur-md flex h-14 flex-row items-center px-4 md:hidden">
                <Link className="inline-flex items-center gap-2 font-semibold" to="/">
                    <svg className="h-[30px] w-[120px] -mt-1" viewBox="0 0 180 34" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_5475_532)">
                            <path
                                d="M29.3515 9.12876L27.733 16.2877L25.6631 7.65029L18.4109 4.70891L16.4499 13.3619L14.7225 3.21488L7.47017 0.289062L0 33.3134H7.92149L10.2092 23.1665L11.9367 33.3134H19.8738L21.8191 24.6605L23.889 33.3134H31.8105L36.6194 12.0546L29.3515 9.12876Z"
                                className="dark:fill-white fill-black"></path>
                            <path
                                d="M83.9154 15.5251C83.9154 14.9406 83.4416 14.4668 82.8571 14.4668C82.2726 14.4668 81.7988 14.9406 81.7988 15.5251V32.2551C81.7988 32.8396 82.2726 33.3134 82.8571 33.3134C83.4416 33.3134 83.9154 32.8396 83.9154 32.2551V15.5251Z"
                                className="dark:fill-white fill-black"></path>
                            <path
                                d="M123.849 15.5251C123.849 14.9406 123.375 14.4668 122.791 14.4668C122.206 14.4668 121.732 14.9406 121.732 15.5251V32.2551C121.732 32.8396 122.206 33.3134 122.791 33.3134C123.375 33.3134 123.849 32.8396 123.849 32.2551V15.5251Z"
                                className="dark:fill-white fill-black"></path>
                            <path
                                d="M61.9867 25.0807L55.2479 14.9648C55.0456 14.6536 54.7032 14.4668 54.3297 14.4668H54.0807C53.5049 14.4668 53.0225 14.9492 53.0225 15.5251V32.2551C53.0225 32.831 53.5049 33.3134 54.0807 33.3134C54.6566 33.3134 55.139 32.831 55.139 32.2551V18.2486L61.1307 27.0416C61.3953 27.4307 61.691 27.5707 61.9867 27.5707C62.2824 27.5707 62.5781 27.4462 62.8426 27.0416L68.8343 18.2486V32.2551C68.8343 32.831 69.3168 33.3134 69.8926 33.3134C70.4684 33.3134 70.9509 32.831 70.9509 32.2551V15.5251C70.9509 14.9492 70.4684 14.4668 69.8926 14.4668H69.6436C69.2701 14.4668 68.9277 14.6536 68.7254 14.9648L61.9867 25.0807Z"
                                className="dark:fill-white fill-black"></path>
                            <path
                                d="M143.66 25.0807L136.922 14.9648C136.719 14.6536 136.377 14.4668 136.004 14.4668H135.755C135.179 14.4668 134.696 14.9492 134.696 15.5251V32.2551C134.696 32.831 135.179 33.3134 135.755 33.3134C136.33 33.3134 136.813 32.831 136.813 32.2551V18.2486L142.805 27.0416C143.069 27.4307 143.365 27.5707 143.66 27.5707C143.956 27.5707 144.252 27.4462 144.516 27.0416L150.508 18.2486V32.2551C150.508 32.831 150.991 33.3134 151.566 33.3134C152.142 33.3134 152.625 32.831 152.625 32.2551V15.5251C152.625 14.9492 152.142 14.4668 151.566 14.4668H151.317C150.944 14.4668 150.602 14.6536 150.399 14.9648L143.66 25.0807Z"
                                className="dark:fill-white fill-black"></path>
                            <path
                                d="M108.768 29.8585L97.034 14.887C96.8316 14.6224 96.5048 14.4668 96.1624 14.4668H95.8356C95.2598 14.4668 94.7773 14.9492 94.7773 15.5251V32.2551C94.7773 32.831 95.2598 33.3134 95.8356 33.3134C96.4114 33.3134 96.8939 32.831 96.8939 32.2551V17.9218L108.473 32.6909L108.628 32.8932C108.831 33.1578 109.157 33.3134 109.5 33.3134H109.827C110.402 33.3134 110.885 32.831 110.885 32.2551V15.5251C110.885 14.9492 110.402 14.4668 109.827 14.4668C109.251 14.4668 108.768 14.9492 108.768 15.5251V29.8585Z"
                                className="dark:fill-white fill-black"></path>
                            <path
                                d="M179.922 31.8972C179.922 31.8972 172.514 15.6963 172.312 15.2761C172.109 14.8559 171.674 14.4668 170.973 14.4668C170.273 14.4668 169.837 14.8403 169.635 15.2761C169.433 15.7118 162.025 31.8972 162.025 31.8972C161.791 32.3952 162.025 32.9866 162.523 33.22C163.021 33.4535 163.612 33.22 163.845 32.722L165.822 28.3177H176.156L178.132 32.722C178.366 33.22 178.957 33.4379 179.455 33.22C179.953 32.9866 180.171 32.3952 179.953 31.8972H179.922ZM170.973 26.3724H166.678L170.973 16.8168L175.269 26.3724H170.973Z"
                                className="dark:fill-white fill-black"></path>
                        </g>
                    </svg>
                </Link>

                <div className="flex flex-1 flex-row items-center">
                    <div
                        className="rounded-md border  p-1 text-sm text-fd-muted-foreground max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2 hidden lg:block ">
                        <a className="rounded-md px-2 py-1 transition-colors hover:text-fd-accent-foreground"
                           href="/docs/core">Introduction</a><a
                        className="rounded-md px-2 py-1 transition-colors hover:text-fd-accent-foreground bg-fd-accent text-fd-accent-foreground"
                        href="/docs/run-a-node">Run a Node</a><a
                        className="rounded-md px-2 py-1 transition-colors hover:text-fd-accent-foreground"
                        href="/docs/user-guides">User Guides</a><a
                        className="rounded-md px-2 py-1 transition-colors hover:text-fd-accent-foreground"
                        href="/docs/learn">Knowledge Base</a><a
                        className="rounded-md px-2 py-1 transition-colors hover:text-fd-accent-foreground"
                        href="/docs/development">Developer Tutorials</a></div>
                </div>

                {/* Mobile Search Button */}
                <button type="button"
                        className="hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 hover:bg-fd-accent hover:text-fd-accent-foreground p-1.5 [&amp;_svg]:size-5"
                        data-search="" aria-label="Open Search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-search">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                </button>

                {/* Nav Button */}
                <button aria-label="Toggle Sidebar" data-open="false"
                        onClick={() => setMobileSidebarOpen(prevState => !prevState)}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 hover:bg-fd-accent hover:text-fd-accent-foreground p-1.5 [&amp;_svg]:size-5 -me-2">
                    {!mobileSidebarOpen && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-menu">
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                            <line x1="4" x2="20" y1="6" y2="6"></line>
                            <line x1="4" x2="20" y1="18" y2="18"></line>
                        </svg>
                    )}
                    {mobileSidebarOpen && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-x">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                        </svg>
                    )}
                </button>
            </header>
            <main id="nd-docs-layout" className="flex flex-1 flex-row">
                <aside id="nd-sidebar"
                       className={`${mobileSidebarOpen ? "block" : "hidden"} lg:flex fixed z-30 flex flex-col bg-fd-card text-sm md:sticky md:top-0 md:h-dvh md:w-[var(--fd-c-sidebar)] md:min-w-[var(--fd-sidebar-width)] md:border-e md:ps-[calc(var(--fd-c-sidebar)-var(--fd-sidebar-width))] max-md:inset-0 max-md:bg-fd-background/80 max-md:pt-14 max-md:text-[15px] max-md:backdrop-blur-md`}>
                    <div className="flex flex-col gap-1 px-4 pt-2 md:px-3 md:pt-4">
                        <div className="flex flex-row items-center border-b pb-2 max-md:hidden">
                            <Link
                                className="inline-flex items-center gap-2.5 py-1 font-medium" to="/">
                                <svg className="h-[30px] w-[120px] -mt-3" viewBox="0 0 180 34" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_5475_532)">
                                        <path
                                            d="M29.3515 9.12876L27.733 16.2877L25.6631 7.65029L18.4109 4.70891L16.4499 13.3619L14.7225 3.21488L7.47017 0.289062L0 33.3134H7.92149L10.2092 23.1665L11.9367 33.3134H19.8738L21.8191 24.6605L23.889 33.3134H31.8105L36.6194 12.0546L29.3515 9.12876Z"
                                            className="dark:fill-white fill-black"></path>
                                        <path
                                            d="M83.9154 15.5251C83.9154 14.9406 83.4416 14.4668 82.8571 14.4668C82.2726 14.4668 81.7988 14.9406 81.7988 15.5251V32.2551C81.7988 32.8396 82.2726 33.3134 82.8571 33.3134C83.4416 33.3134 83.9154 32.8396 83.9154 32.2551V15.5251Z"
                                            className="dark:fill-white fill-black"></path>
                                        <path
                                            d="M123.849 15.5251C123.849 14.9406 123.375 14.4668 122.791 14.4668C122.206 14.4668 121.732 14.9406 121.732 15.5251V32.2551C121.732 32.8396 122.206 33.3134 122.791 33.3134C123.375 33.3134 123.849 32.8396 123.849 32.2551V15.5251Z"
                                            className="dark:fill-white fill-black"></path>
                                        <path
                                            d="M61.9867 25.0807L55.2479 14.9648C55.0456 14.6536 54.7032 14.4668 54.3297 14.4668H54.0807C53.5049 14.4668 53.0225 14.9492 53.0225 15.5251V32.2551C53.0225 32.831 53.5049 33.3134 54.0807 33.3134C54.6566 33.3134 55.139 32.831 55.139 32.2551V18.2486L61.1307 27.0416C61.3953 27.4307 61.691 27.5707 61.9867 27.5707C62.2824 27.5707 62.5781 27.4462 62.8426 27.0416L68.8343 18.2486V32.2551C68.8343 32.831 69.3168 33.3134 69.8926 33.3134C70.4684 33.3134 70.9509 32.831 70.9509 32.2551V15.5251C70.9509 14.9492 70.4684 14.4668 69.8926 14.4668H69.6436C69.2701 14.4668 68.9277 14.6536 68.7254 14.9648L61.9867 25.0807Z"
                                            className="dark:fill-white fill-black"></path>
                                        <path
                                            d="M143.66 25.0807L136.922 14.9648C136.719 14.6536 136.377 14.4668 136.004 14.4668H135.755C135.179 14.4668 134.696 14.9492 134.696 15.5251V32.2551C134.696 32.831 135.179 33.3134 135.755 33.3134C136.33 33.3134 136.813 32.831 136.813 32.2551V18.2486L142.805 27.0416C143.069 27.4307 143.365 27.5707 143.66 27.5707C143.956 27.5707 144.252 27.4462 144.516 27.0416L150.508 18.2486V32.2551C150.508 32.831 150.991 33.3134 151.566 33.3134C152.142 33.3134 152.625 32.831 152.625 32.2551V15.5251C152.625 14.9492 152.142 14.4668 151.566 14.4668H151.317C150.944 14.4668 150.602 14.6536 150.399 14.9648L143.66 25.0807Z"
                                            className="dark:fill-white fill-black"></path>
                                        <path
                                            d="M108.768 29.8585L97.034 14.887C96.8316 14.6224 96.5048 14.4668 96.1624 14.4668H95.8356C95.2598 14.4668 94.7773 14.9492 94.7773 15.5251V32.2551C94.7773 32.831 95.2598 33.3134 95.8356 33.3134C96.4114 33.3134 96.8939 32.831 96.8939 32.2551V17.9218L108.473 32.6909L108.628 32.8932C108.831 33.1578 109.157 33.3134 109.5 33.3134H109.827C110.402 33.3134 110.885 32.831 110.885 32.2551V15.5251C110.885 14.9492 110.402 14.4668 109.827 14.4668C109.251 14.4668 108.768 14.9492 108.768 15.5251V29.8585Z"
                                            className="dark:fill-white fill-black"></path>
                                        <path
                                            d="M179.922 31.8972C179.922 31.8972 172.514 15.6963 172.312 15.2761C172.109 14.8559 171.674 14.4668 170.973 14.4668C170.273 14.4668 169.837 14.8403 169.635 15.2761C169.433 15.7118 162.025 31.8972 162.025 31.8972C161.791 32.3952 162.025 32.9866 162.523 33.22C163.021 33.4535 163.612 33.22 163.845 32.722L165.822 28.3177H176.156L178.132 32.722C178.366 33.22 178.957 33.4379 179.455 33.22C179.953 32.9866 180.171 32.3952 179.953 31.8972H179.922ZM170.973 26.3724H166.678L170.973 16.8168L175.269 26.3724H170.973Z"
                                            className="dark:fill-white fill-black"></path>
                                    </g>
                                </svg>
                            </Link>

                            {/* Kebab Links */}
                            <div className="relative flex-1 flex justify-end">
                                <button type="button" aria-haspopup="dialog" aria-expanded="false"
                                        aria-controls="radix-:R4lj7qja:"
                                        data-state="closed"
                                        onClick={() => setKebabOpen(prevState => !prevState)}
                                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 hover:bg-fd-accent hover:text-fd-accent-foreground p-1.5 [&amp;_svg]:size-5 ms-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none"
                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round"
                                         className="lucide lucide-ellipsis">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </button>
                                <div onClick={() => setKebabOpen(false)}
                                     className={`${kebabOpen ? "pointer-events-auto" : "pointer-events-none"} fixed top-0 left-0 w-screen h-screen z-20`}/>
                                <div
                                    className={`${kebabOpen ? "pointer-events-auto" : "pointer-events-none"} absolute z-50 w-full bottom-[-55px]`}>
                                    <div role="dialog"
                                         className={`${kebabOpen ? "scale-100 translate-y-0 opacity-100" : "scale-90 opacity-0 translate-y-[-30px]"} min-w-[220px] max-w-[98vw] rounded-lg border bg-fd-popover p-2 text-sm text-fd-popover-foreground shadow-md data-[state=closed]:animate-fd-popover-out data-[state=open]:animate-fd-popover-in flex flex-col transition-all`}>
                                        <a href="https://github.com/minima-global" rel="noreferrer noopener"
                                           target="_blank"
                                           className="flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-75 [overflow-wrap:anywhere] [&amp;_svg]:size-4 hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none">
                                            <svg role="img" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                            </svg>
                                            Github
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section Links */}
                        <div className="relative w-full mt-2">

                            {/* Active Section */}
                            <button type="button" aria-haspopup="dialog" aria-expanded="false"
                                    onClick={() => setSectionMenuOpen(true)}
                                    aria-controls="radix-:R15j7qja:"
                                    data-state="closed"
                                    className="w-full flex flex-row items-center gap-2.5 rounded-lg p-2 hover:bg-fd-accent/50 hover:text-fd-accent-foreground">
                                {activeSubMenu?.icon}
                                <div className="flex-1 text-left"><p
                                    className="text-sm font-medium">{activeSubMenu?.title}</p><p
                                    className="text-xs text-fd-muted-foreground">{activeSubMenu?.description}</p></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round"
                                     className="lucide lucide-chevron-down size-4 text-fd-muted-foreground md:me-1.5">
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>

                            <div onClick={() => setSectionMenuOpen(false)}
                                 className={`${sectionMenuOpen ? "pointer-events-auto" : "pointer-events-none"} fixed top-0 left-0 w-screen h-screen z-20`}/>
                            <div
                                className={`absolute w-full z-50 ${sectionMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
                                <div role="dialog"
                                     id="radix-:R15j7qja:"
                                     className={`${sectionMenuOpen ? "scale-100 translate-y-0 opacity-100" : "scale-90 opacity-0 translate-y-[-30px]"} opacity-0 transition-all z-50 min-w-[220px] max-w-[98vw] rounded-lg border bg-fd-popover text-sm text-fd-popover-foreground shadow-md data-[state=closed]:animate-fd-popover-out data-[state=open]:animate-fd-popover-in w-[var(--radix-popover-trigger-width)] overflow-hidden p-0`}>

                                    {SECTION_MENU.map((menuItem) => (
                                        <Link className="flex w-full flex-row gap-2 p-2 hover:bg-fd-accent/50"
                                              onClick={() => setSectionMenuOpen(false)}
                                              to={menuItem.href}>
                                            {menuItem.icon}
                                            <div className="flex-1 text-left"><p
                                                className="text-sm font-medium">{menuItem.title}</p><p
                                                className="text-xs text-fd-muted-foreground">{menuItem.description}</p>
                                            </div>
                                        </Link>
                                    ))}

                                </div>
                            </div>
                        </div>

                        {/* Search */}
                        <button type="button" data-search-full=""
                                className="hidden inline-flex items-center gap-2 border bg-fd-secondary/50 p-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground rounded-lg max-md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="lucide lucide-search ms-1 size-4">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                            Search
                            <div className="ms-auto inline-flex gap-0.5"><kbd
                                className="rounded-md border bg-fd-background px-1.5">⌘</kbd><kbd
                                className="rounded-md border bg-fd-background px-1.5">K</kbd></div>
                        </button>
                    </div>

                    {/* main nav */}
                    <div dir="ltr"
                         className="flex-1 overflow-y-scroll custom-scrollbar"
                         style={{
                             maskImage: "linear-gradient(transparent 2px, white 24px)",
                         }}
                    >
                        <div className="size-full rounded-[inherit]">
                            <div>
                                {/* Links */}
                                <div className="flex flex-col px-4 pt-6 md:hidden relative">
                                    <a href="https://github.com/minima-global" rel="noreferrer noopener" target="_blank"
                                       className="flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [overflow-wrap:anywhere] [&amp;_svg]:size-4 hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none">
                                        <svg role="img" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                        </svg>
                                        Github
                                    </a>
                                </div>

                                {/* Links */}
                                <div className="px-4 py-6 md:px-3">

                                    <div className="flex flex-col gap-8">
                                        {activeMenu && activeMenu.map((nav) => (
                                            <div className={nav.parentClass ?? ""}>
                                                {!nav.skip && (
                                                    <p className="mb-2 mt-8 px-2 font-medium first:mt-0">
                                                        {nav.title}
                                                    </p>
                                                )}
                                                {nav.children?.map((subItem) => (
                                                    <>
                                                        {subItem.icon && (
                                                            <Link to={subItem.href} className={`${location.pathname === subItem.href ? `flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-100 [overflow-wrap:anywhere] [&_svg]:size-4 bg-fd-primary/10 font-medium text-fd-primary` : `flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [overflow-wrap:anywhere] [&_svg]:size-4 hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-noneflex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [overflow-wrap:anywhere] [&_svg]:size-4 hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none`}`}>
                                                                <div
                                                                    className="rounded-md border bg-gradient-to-b from-secondary p-1 shadow-sm">
                                                                    {subItem.icon}
                                                                </div>
                                                                {subItem.title}
                                                            </Link>
                                                        )}
                                                        {!subItem.icon && (
                                                            <>
                                                                {!subItem.external && (
                                                                    <Link
                                                                        className={`${subItem.href === location.pathname ? "flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-100 [overflow-wrap:anywhere] [&_svg]:size-4 bg-fd-primary/10 font-medium text-fd-primary" : "flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [overflow-wrap:anywhere] [&amp;_svg]:size-4 hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"}`}
                                                                        to={subItem.href}
                                                                        onClick={() => setMobileSidebarOpen(false)}
                                                                    >
                                                                        {subItem.title}
                                                                    </Link>
                                                                )}
                                                                {subItem.external && (
                                                                    <a href={subItem.href} rel="noreferrer noopener"
                                                                       target="_blank"
                                                                       className="flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [overflow-wrap:anywhere] [&amp;_svg]:size-4 hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                             height="24"
                                                                             viewBox="0 0 24 24"
                                                                             fill="none" stroke="currentColor" strokeWidth="2"
                                                                             strokeLinecap="round"
                                                                             strokeLinejoin="round"
                                                                             className="lucide lucide-external-link">
                                                                            <path d="M15 3h6v6"></path>
                                                                            <path d="M10 14 21 3"></path>
                                                                            <path
                                                                                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                                        </svg>
                                                                        {subItem.title}
                                                                    </a>
                                                                )}
                                                            </>
                                                        )}
                                                    </>
                                                ))}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="hidden">
                                        <p
                                            className="mb-2 mt-8 px-2 font-medium first:mt-0">Minima</p><a
                                        className="flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-100 [overflow-wrap:anywhere] [&amp;_svg]:size-4 bg-fd-primary/10 font-medium text-fd-primary"
                                        href="/docs/core">About Minima</a><a
                                        className="flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [overflow-wrap:anywhere] [&amp;_svg]:size-4 hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
                                        href="/docs/core/get-involved">Get Involved</a><a
                                        className="flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [overflow-wrap:anywhere] [&amp;_svg]:size-4 hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
                                        href="/docs/core/use-cases">Use Cases</a><a
                                        className="flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [overflow-wrap:anywhere] [&amp;_svg]:size-4 hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
                                        href="/docs/core/tokenomics">Tokenomics</a><p
                                        className="mb-2 mt-8 px-2 font-medium first:mt-0">Terms of Use</p><a
                                        className="flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [overflow-wrap:anywhere] [&amp;_svg]:size-4 hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
                                        href="/docs/core/minidapp-terms">MiniDapp Terms of Use</a><a
                                        className="flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [overflow-wrap:anywhere] [&amp;_svg]:size-4 hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
                                        href="/docs/core/website-terms">Website Terms of Use</a><a
                                        className="flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [overflow-wrap:anywhere] [&amp;_svg]:size-4 hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
                                        href="/docs/core/minima-privacy-policy">Minima Privacy Policy</a><a
                                        className="flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [overflow-wrap:anywhere] [&amp;_svg]:size-4 hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
                                        href="/docs/core/presale">Presale Privacy Policy</a><p
                                        className="mb-2 mt-8 px-2 font-medium first:mt-0"> Whitepaper</p><a
                                        href=" https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf"
                                        rel="noreferrer noopener" target="_blank"
                                        className="flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 text-fd-muted-foreground transition-colors duration-100 [overflow-wrap:anywhere] [&amp;_svg]:size-4 hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                             strokeLinejoin="round" className="lucide lucide-external-link">
                                            <path d="M15 3h6v6"></path>
                                            <path d="M10 14 21 3"></path>
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        </svg>
                                        Minima Whitepaper</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* theme toggle */}
                    <div className="flex flex-row items-center border-t py-1 max-md:px-4 md:mx-3">
                        <button type="button" className="inline-flex items-center rounded-full border p-0.5"
                                data-theme-toggle="" aria-label="Toggle Theme" onClick={toggleTheme}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="lucide lucide-sun size-6 rounded-full p-1 bg-fd-accent text-fd-accent-foreground dark:bg-transparent dark:text-fd-muted-foreground">
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 2v2"></path>
                                <path d="M12 20v2"></path>
                                <path d="m4.93 4.93 1.41 1.41"></path>
                                <path d="m17.66 17.66 1.41 1.41"></path>
                                <path d="M2 12h2"></path>
                                <path d="M20 12h2"></path>
                                <path d="m6.34 17.66-1.41 1.41"></path>
                                <path d="m19.07 4.93-1.41 1.41"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="lucide lucide-moon size-6 rounded-full p-1 text-fd-muted-foreground dark:bg-fd-accent dark:text-fd-accent-foreground">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </svg>
                        </button>
                    </div>

                </aside>
                <div className="mx-auto flex min-w-0 max-w-[860px] flex-1 flex-col">

                    {/* Mobile nav */}
                    <div
                        className="hidden sticky top-14 z-10 border-b bg-fd-background/60 text-sm backdrop-blur-md md:top-1 md:mx-3 md:rounded-full md:border md:shadow-md lg:hidden">
                        <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r7:"
                                data-state="closed"
                                className="inline-flex size-full items-center gap-2 text-nowrap px-4 py-2 text-left md:px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="lucide lucide-text size-4 shrink-0">
                                <path d="M17 6.1H3"></path>
                                <path d="M21 12.1H3"></path>
                                <path d="M15.1 18H3"></path>
                            </svg>
                            On this page
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="lucide lucide-chevron-right -mx-1.5 size-4 shrink-0 text-fd-muted-foreground">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <span className="truncate text-fd-muted-foreground">What is Minima?</span></button>
                    </div>
                    <article className="flex flex-1 flex-col gap-6 px-4 pt-10 md:px-6 md:pt-12">
                        <div className="prose mb-16">
                            {children}
                        </div>
                    </article>
                </div>

                {/* On-this-page */}
                <div
                    className="hidden sticky top-0 flex h-dvh w-[var(--fd-c-toc)] min-w-[var(--fd-toc-width)] flex-col gap-4 pe-[max(calc(var(--fd-c-toc)-var(--fd-toc-width)),0.75rem)] pt-12 max-lg:hidden">
                    <h3 className="-mb-1 -ms-0.5 inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-text size-4">
                            <path d="M17 6.1H3"></path>
                            <path d="M21 12.1H3"></path>
                            <path d="M15.1 18H3"></path>
                        </svg>
                        On this page
                    </h3>
                    <div dir="ltr" className="overflow-hidden flex flex-col">
                        <div data-radix-scroll-area-viewport=""
                             className="size-full rounded-[inherit] relative min-h-0 text-sm text-fd-muted-foreground">
                            <div>
                                <div className="absolute start-0 top-0 rtl:-scale-x-100"
                                >
                                    <div className="bg-fd-primary transition-all"></div>
                                </div>
                                <div className="flex flex-col"><a data-active="true" href="#what-is-minima"
                                                                  className="relative py-2 transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary">
                                    <div className="absolute inset-y-0 w-px bg-fd-foreground/10"
                                    ></div>
                                    What is Minima?</a><a data-active="false" href="#who-is-minima-for"
                                                          className="relative py-2 transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary"
                                >
                                    <div className="absolute inset-y-0 w-px bg-fd-foreground/10"
                                    ></div>
                                    Who is Minima for?</a></div>
                            </div>
                        </div>
                    </div>
                    <a href="https://github.com/minima-global/docs/blob/main/content/docs/core/index.mdx"
                       target="_blank"
                       rel="noreferrer noopener"
                       className="inline-flex items-center justify-center rounded-md font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 border hover:bg-fd-accent hover:text-fd-accent-foreground text-fd-muted-foreground text-xs p-1.5 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-square-pen size-3.5">
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path
                                d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                        </svg>
                        Edit on GitHub
                    </a>
                </div>
            </main>
        </>
    )
}

export default Layout;