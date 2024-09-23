import React from "react";
import { cn } from "@/app/lib/utils"
import { Link } from "react-router-dom"
import { SparklesCore } from "./sparkles"
import useTheme from "@/__minidapp/hooks/useTheme";
import useTitle from "@/__minidapp/hooks/useTitle";

export function Home() {
    useTitle();
    const { toggleTheme } = useTheme();

    return (
        <div>
            <header id="nd-nav"
                    className="sticky top-0 z-50 border-b transition-colors border-transparent h-14">
                <nav
                    className="mx-auto flex size-full max-w-container flex-row items-center gap-6 px-4">
                    <Link className="inline-flex items-center gap-2 font-semibold" to="/public">
                        <svg className="h-[30px] w-[120px] -mt-1" viewBox="0 0 180 34"
                             fill="none"
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
                    <div
                        className="rounded-md border  p-1 text-sm text-fd-muted-foreground max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2 hidden lg:block ">
                        <Link
                            className="rounded-md px-2 py-1 transition-colors hover:text-fd-accent-foreground"
                            to="/docs/core">Introduction</Link><Link
                        className="rounded-md px-2 py-1 transition-colors hover:text-fd-accent-foreground"
                        to="/docs/run-a-node">Run a Node</Link><Link
                        className="rounded-md px-2 py-1 transition-colors hover:text-fd-accent-foreground"
                        to="/docs/user-guides">User Guides</Link><Link
                        className="rounded-md px-2 py-1 transition-colors hover:text-fd-accent-foreground"
                        to="/docs/learn">Knowledge Base</Link><Link
                        className="rounded-md px-2 py-1 transition-colors hover:text-fd-accent-foreground"
                        to="/docs/development">Developer Tutorials</Link></div>

                    <div
                        className="flex flex-1 flex-row items-center justify-end md:gap-2">

                        {/* Search button */}
                        <button type="button"
                                className="hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 hover:bg-fd-accent hover:text-fd-accent-foreground p-1.5 [&amp;_svg]:size-5 md:hidden"
                                data-search="" aria-label="Open Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="lucide lucide-search">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                        </button>

                        {/* Theme toggle */}
                        <button type="button"
                                className="inline-flex items-center rounded-full border p-0.5"
                                data-theme-toggle="" aria-label="Toggle Theme" onClick={toggleTheme}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="lucide lucide-moon size-6 rounded-full p-1 text-fd-muted-foreground dark:bg-fd-accent dark:text-fd-accent-foreground">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </svg>
                        </button>

                        <a href="https://github.com/minima-global"
                           rel="noreferrer noopener"
                           target="_blank"
                           className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 hover:bg-fd-accent hover:text-fd-accent-foreground p-1.5 [&amp;_svg]:size-5 max-lg:hidden">
                            <svg role="img" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                            </svg>
                        </a>

                        <button type="button" aria-haspopup="dialog" aria-expanded="false"
                                aria-controls="radix-:R28nqja:" data-state="closed"
                                className="hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 hover:bg-fd-accent hover:text-fd-accent-foreground p-1.5 [&amp;_svg]:size-5 -me-2 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="lucide lucide-ellipsis-vertical">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="12" cy="5" r="1"></circle>
                                <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
            <div
                className="h-[calc(100vh-60px)] bg-background relative  md:px-8 flex flex-col justify-start items-start z-20 py-10 lg:py-16  mx-auto w-full  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
                <div className=" absolute inset-0 top-0 z-[9000] h-[30vh] overflow-hidden">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </div>
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
                <div className=" absolute inset-0 bg-background h-1/2 bottom-0"></div>
                <div className=" absolute bg-background right-0 bottom-[460px] left-0 h-[100px] blur-xl"></div>
                <div className="flex flex-col  mx-auto  md:px-10 mt-20 relative  pb-12 xl:min-w-[1200px] ">
                    <main className=" relative  px-2 flex flex-col justify-center items-center">
                        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-primary-foreground">
                            Welcome to the Minima Docs
                        </h4>
                        <p className="text-lg lg:text-xl  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                            Learn all there is to know about Minima
                        </p>

                        <Cards/>
                    </main>
                </div>
            </div>
        </div>
    )
}

const Cards = () => {
    const features = [
        {
            title: "Introduction",
            description: "Learn about Minima and how to get involved.",
            link: "/docs/core",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 32"
                    className=" h-5 w-5 fill-neutral-500 group-hover:fill-orange-500"
                >
                    <path
                        d="M25.6,9.3l-1.4,6.3L22.4,8l-6.3-2.6L14.4,13l-1.5-8.9L6.5,1.6L0,30.4h6.9l2-8.9l1.5,8.9h6.9l1.7-7.6l1.8,7.6h6.9L32,11.9  L25.6,9.3z"/>
                </svg>
            ),
        },
        {
            title: "Run a node",
            description:
                "Install and run a validating and constructing Minima node on your device.",
            link: "/docs/run-a-node",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 32"
                    className=" h-5 w-5 fill-neutral-500 group-hover:fill-orange-500 transition-colors"
                >
                    <circle cx="16" cy="16" r="16"/>
                </svg>
            ),
        },
        {
            title: "User Guides",
            description: "Guidance for using and managing your Minima node",
            link: "/docs/user-guides",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 32"
                    className=" h-5 w-5 fill-neutral-500 group-hover:fill-orange-500 transition-colors"
                >
                    <path d="M15.9,0l-16,16v16l16-16V0z"/>
                    <path d="M31.9,0l-16,16v16l16-16V0z"/>
                </svg>
            ),
        },
        {
            title: "Developer Tutorials",
            description:
                "Develop decentralized applications and create smart contracts on Minima",
            link: "/docs/development",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 32"
                    className=" h-5 w-5 fill-neutral-500 group-hover:fill-orange-500 transition-colors"
                >
                    <path d="M16,16H0v16h16V16z"/>
                    <path d="M32,0H16v16h16V0z"/>
                </svg>
            ),
        },
        {
            title: "Knowledge Base",
            description: "A deep dive into the Minima protocol and its architecture",
            link: "/docs/learn",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 32"
                    className=" h-5 w-5 fill-neutral-500 group-hover:fill-orange-500 transition-colors"
                >
                    <path d="M10.7,21.3V10.7h10.7V0H32v32H0V21.3H10.7z"/>
                </svg>
            ),
        },
        {
            title: "Tokenomics",
            description:
                "Understand Minima's token allocation and distribution schedule",
            link: "/docs/core/tokenomics",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 32"
                    className=" h-5 w-5 fill-neutral-500 group-hover:fill-orange-500 transition-colors"
                >
                    <g>
                        <path
                            d="M24.7,14.4c3.9,0,7.1-3.2,7.1-7.1c0-3.9-3.2-7.1-7.1-7.1c-3.9,0-7.1,3.2-7.1,7.1C17.6,11.2,20.8,14.4,24.7,14.4z"/>
                        <path
                            d="M7.3,14.4c3.9,0,7.1-3.2,7.1-7.1c0-3.9-3.2-7.1-7.1-7.1c-3.9,0-7.1,3.2-7.1,7.1C0.1,11.2,3.3,14.4,7.3,14.4z"/>
                        <path
                            d="M24.7,31.9c3.9,0,7.1-3.2,7.1-7.1c0-3.9-3.2-7.1-7.1-7.1c-3.9,0-7.1,3.2-7.1,7.1C17.6,28.7,20.8,31.9,24.7,31.9z"/>
                        <path
                            d="M7.3,31.9c3.9,0,7.1-3.2,7.1-7.1c0-3.9-3.2-7.1-7.1-7.1c-3.9,0-7.1,3.2-7.1,7.1C0.1,28.7,3.3,31.9,7.3,31.9z"/>
                    </g>
                </svg>
            ),
        },
    ]
    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative pt-5  mx-auto  mt-10  rounded-xl bg-background box dark:box z-[9999] w-full  ">
            {features.map((feature, index) => (
                <FeatureCards key={feature.title} {...feature} index={index} link={feature.link}/>
            ))}
        </div>
    )
}

const FeatureCards = ({
    title,
    description,
    icon,
    index,
    link
}: {
    title: string
    description: string
    icon: React.ReactNode
    index: number
    link: string
}) => {
    return (
        <Link
            to={link}
            className={cn(
                "flex flex-col lg:border-r group  py-10 relative group/feature dark:border-neutral-800 cursor-pointer  ",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 3 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent  "/>
            )}
            {index >= 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"/>
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div
                    className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center"/>
                <span
                    className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-700 dark:text-neutral-100">
          {title}
        </span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </Link>
    )
}

export default Home;
