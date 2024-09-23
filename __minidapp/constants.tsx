import { ReactNode } from "react";

/**
 * Probably can create a script that generates this file that uses the meta.json files in the content
 * folder but for now, using static data...
 */

type Menu = Record<string, {
    title: string,
    parentClass?: string,
    skip?: boolean,
    href?: string,
    icon?: ReactNode,
    children?: { title: string, icon?: ReactNode, href: string, external?: boolean }[]
}[]>

export const SECTION_MENU = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-cpu size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
                 style={{
                     backgroundColor: "hsl(var(--core-color)/.3)",
                     color: "hsl(var(--core-color))"
                 }}>
                <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                <path d="M15 2v2"></path>
                <path d="M15 20v2"></path>
                <path d="M2 15h2"></path>
                <path d="M2 9h2"></path>
                <path d="M20 15h2"></path>
                <path d="M20 9h2"></path>
                <path d="M9 2v2"></path>
                <path d="M9 20v2"></path>
            </svg>
        ),
        key: "CORE",
        title: "Introduction",
        description: "Introduction to Minima",
        href: "/docs/core",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-blocks size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
                 style={{
                     backgroundColor: "hsl(var(--run-a-node-color)/.3)",
                     color: "hsl(var(--run-a-node-color))",
                 }}>
                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                <path
                    d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
            </svg>
        ),
        key: "RUN_A_NODE",
        title: "Run a Node",
        description: "Run a Minima Node",
        href: "/docs/run-a-node",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-book-open size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
                 style={{
                     backgroundColor: "hsl(var(--user-guides-color)/.3)",
                     color: "hsl(var(--user-guides-color))",
                 }}>
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
        ),
        key: "USER_GUIDES",
        title: "User Guides",
        description: "How to use Minima",
        href: "/docs/user-guides",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-shapes size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
                 style={{
                     backgroundColor: "hsl(var(--learn-color)/.3)",
                     color: "hsl(var(--learn-color))",
                 }}>
                <path
                    d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path>
                <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                <circle cx="17.5" cy="17.5" r="3.5"></circle>
            </svg>
        ),
        key: "LEARN",
        title: "Knowledge Base",
        description: "Learn how Minima works",
        href: "/docs/learn",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-pencil-ruler size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
                 style={{
                     backgroundColor: "hsl(var(--development-color)/.3)",
                     color: "hsl(var(--development-color))",
                 }}>
                <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
                <path d="m8 6 2-2"></path>
                <path d="m18 16 2-2"></path>
                <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
                <path
                    d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                <path d="m15 5 4 4"></path>
            </svg>
        ),
        key: "DEVELOPMENT",
        title: "Developer Tutorials",
        description: "Develop on Minima",
        href: "/docs/development",
    },
]

export const MENU: Menu = {
    CORE: [
        {
            title: "Minima",
            children: [
                {
                    title: "About Minima",
                    href: "/docs/core"
                },
                {
                    title: "Get Involved",
                    href: "/docs/core/get-involved"
                },
                {
                    title: "Use Cases",
                    href: "/docs/core/use-cases"
                },
                {
                    title: "Tokenomics",
                    href: "/docs/core/tokenomics"
                }
            ],
        },
        {
            title: "Terms of Use",
            children: [
                {
                    title: "MiniDapp Terms of Use",
                    href: "/docs/core/minidapp-terms"
                },
                {
                    title: "Website Terms of Use",
                    href: "/docs/core/website-terms"
                },
                {
                    title: "Minima Privacy Policy",
                    href: "/docs/core/minima-privacy-policy"
                },
                {
                    title: "Presale Privacy Policy",
                    href: "/docs/core/presale"
                }
            ],
        },
        {
            title: "Whitepaper",
            children: [
                {
                    title: "Minima Whitepaper",
                    href: " https://docs.minima.global/minima_pdfs/Minima_Whitepaper_v11.pdf",
                    external: true,
                }
            ]
        }
    ],
    RUN_A_NODE: [
        {
            title: "Top",
            skip: true,
            parentClass: "run-a-node",
            children: [
                {
                    title: "Quick Start",
                    href: "/docs/run-a-node",
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-zap">
                            <path
                                d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                    )
                },
                {
                    title: "System Requirements",
                    href: "/docs/run-a-node/system-requirements",
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-battery-full">
                            <rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect>
                            <line x1="22" x2="22" y1="11" y2="13"></line>
                            <line x1="6" x2="6" y1="11" y2="13"></line>
                            <line x1="10" x2="10" y1="11" y2="13"></line>
                            <line x1="14" x2="14" y1="11" y2="13"></line>
                        </svg>
                    )
                },
            ]
        },
        {
            title: "Select your Platform",
            parentClass: "run-a-node",
            children: [
                {
                    title: "Android",
                    href: "/docs/run-a-node/android"
                },
                {
                    title: "Windows",
                    href: "/docs/run-a-node/windows"
                },
                {
                    title: "Mac",
                    href: "/docs/run-a-node/mac"
                },
                {
                    title: "Docker Desktop",
                    href: "/docs/run-a-node/docker-desktop"
                },
                {
                    title: "Linux VPS (Docker)",
                    href: "/docs/run-a-node/linux-vps"
                },
                {
                    title: "Linux VPS (Systemd service)",
                    href: "/docs/run-a-node/linux-vps-system"
                },
                {
                    title: "Desktop Command Line",
                    href: "/docs/run-a-node/desktop-cli"
                }
            ]
        },
        {
            title: "Archive Node",
            parentClass: "run-a-node",
            children: [
                {
                    title: "Run an Archive Node",
                    href: "/docs/run-a-node/archive-node"
                }
            ]
        },
        {
            title: "Mega Node (NEW)",
            parentClass: "run-a-node",
            children: [
                {
                    title: "Run a Mega Node",
                    href: "/docs/run-a-node/mega-node"
                },
                {
                    title: "Host a Public Wallet",
                    href: "/docs/run-a-node/public-wallet"
                }
            ]
        }
    ],
    USER_GUIDES: [
        {
            title: "Guides",
            parentClass: "user-guides",
            children: [
                {
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-key-round">
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                    ),
                    title: "Login to Minima",
                    href: "/docs/user-guides"
                },
                {
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-network">
                            <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                            <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                            <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                            <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                            <path d="M12 12V8"></path>
                        </svg>
                    ),
                    title: "Join the network",
                    href: "/docs/user-guides/jointhenetwork"
                },
                {
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-lock">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                    ),
                    title: "Secure your seedphrase",
                    href: "/docs/user-guides/secure-your-seedphrase"
                }
            ]
        },
        {
            title: "General",
            parentClass: "user-guides",
            children: [
                {
                    title: "Check your node status",
                    href: "/docs/user-guides/check-node-status"
                },
                {
                    title: "Set your profile",
                    href: "/docs/user-guides/set-your-profile"
                }
            ]
        },
        {
            title: "Security",
            parentClass: "user-guides",
            children: [
                {
                    title: "Lock your wallet",
                    href: "/docs/user-guides/lock-your-wallet"
                },
                {
                    title: "Backup your wallet",
                    href: "/docs/user-guides/backup-your-wallet"
                }
            ]
        },
        {
            title: "MiniDapp System",
            parentClass: "user-guides",
            children: [
                {
                    title: "MiniDapp Permissions",
                    href: "/docs/user-guides/minidapp-permissions"
                },
                {
                    title: "Approve Transactions",
                    href: "/docs/user-guides/approve-transactions"
                },
                {
                    title: "Managing MiniDapps",
                    href: "/docs/user-guides/manage-minidapps"
                }
            ]
        },
        {
            title: "Maxima",
            parentClass: "user-guides",
            children: [
                {
                    title: "Manage Maxima contacts",
                    href: "/docs/user-guides/maxima-contacts"
                },
                {
                    title: "Advanced Maxima Options",
                    href: "/docs/user-guides/advanced-maxima-options"
                }
            ]
        },
        {
            title: "Node Recovery",
            parentClass: "user-guides",
            children: [
                {
                    title: "Recover Options",
                    href: "/docs/user-guides/node-recovery/recover-options"
                },
                {
                    title: "Chain Resync",
                    href: "/docs/user-guides/node-recovery/chain-resync"
                },
                {
                    title: "Restoring your backup",
                    href: "/docs/user-guides/node-recovery/restore-backup"
                },
                {
                    title: "Import your seed phrase",
                    href: "/docs/user-guides/node-recovery/import-seed-phrase"
                }
            ]
        },
        {
            title: "Archive Node",
            parentClass: "user-guides",
            children: [
                {
                    title: "Archive File Export",
                    href: "/docs/user-guides/manage-archive-node/archive-export"
                },
                {
                    title: "Exporting to MySQL",
                    href: "/docs/user-guides/manage-archive-node/archive-export-sql"
                }
            ]
        },
        {
            title: "Advanced",
            parentClass: "user-guides",
            children: [
                {
                    title: "Cold Storage setup",
                    href: "/docs/user-guides/advanced/cold-storage"
                },
                {
                    title: "Log messages",
                    href: "/docs/user-guides/advanced/log-messages"
                }
            ]
        }
    ],
    LEARN: [
        {
            title: "Top",
            skip: true,
            parentClass: "learn",
            children: [
                {
                    "title": "Core Concepts",
                    "href": "/docs/learn",
                    "icon": (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-album">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                            <polyline points="11 3 11 11 14 8 17 11 17 3"></polyline>
                        </svg>
                    ),
                },
                {
                    "title": "Network Overview",
                    "href": "/docs/learn/network",
                    "icon": (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-layers">
                            <path
                                d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
                            <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                            <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                        </svg>
                    ),
                },
                {
                    "title": "Glossary",
                    "href": "/docs/learn/glossary",
                    "icon": (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-book">
                            <path
                                d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                        </svg>
                    )
                },
            ],
        },
        {
            "title": "Minima",
            parentClass: "learn",
            "children": [
                {
                    "title": "Transactions",
                    "href": "/docs/learn/transactions"
                },
                {
                    "title": "MMR Database",
                    "href": "/docs/learn/mmr-database"
                },
                {
                    "title": "TxPoW Units & Blocks",
                    "href": "/docs/learn/txpow"
                },
                {
                    "title": "The Blockchain",
                    "href": "/docs/learn/the-blockchain"
                },
                {
                    "title": "Mining and Consensus",
                    "href": "/docs/learn/miningandconsensus"
                },
                {
                    "title": "Coloured Coins",
                    "href": "/docs/learn/coloured-coins"
                },
                {
                    "title": "Keys and Signatures",
                    "href": "/docs/learn/keysandsignatures"
                },
                {
                    "title": "Scripting",
                    "href": "/docs/learn/scripting"
                },
                {
                    "title": "Quantum Security",
                    "href": "/docs/learn/quantumsecurity"
                },
                {
                    "title": "Archive Nodes",
                    "href": "/docs/learn/archivenodes"
                }
            ]
        },
        {
            "title": "Maxima",
            parentClass: "learn",
            "children": [
                {
                    "title": "About",
                    "href": "/docs/learn/about-maxima"
                },
                {
                    "title": "Contacts",
                    "href": "/docs/learn/maxima-contacts"
                },
                {
                    "title": "Messaging",
                    "href": "/docs/learn/maxima-messaging"
                },
                {
                    "title": "Location Service",
                    "href": "/docs/learn/maxima-mls"
                },
                {
                    "title": "FAQ",
                    "href": "/docs/learn/maxima-faq"
                }
            ]
        },
        {
            "title": "MiniDapps",
            parentClass: "learn",
            "children": [
                {
                    "title": "About",
                    "href": "/docs/learn/about-minidapps"
                },
                {
                    "title": "MiniDapp Structure",
                    "href": "/docs/learn/minidapp-structure"
                },
                {
                    "title": "Config File",
                    "href": "/docs/learn/minidapp-configfile"
                },
                {
                    "title": "mds.js library",
                    "href": "/docs/learn/minidapp-mds"
                },
                {
                    "title": "Events",
                    "href": "/docs/learn/minidapp-events"
                },
                {
                    "title": "MiniBrowser",
                    "href": "/docs/learn/mini-browser"
                },
                {
                    "title": "service.js",
                    "href": "/docs/learn/service-js"
                }
            ]
        },
        {
            "title": "Smart Contracts",
            parentClass: "learn",
            "children": [
                {
                    "title": "Transaction Basics",
                    "href": "/docs/learn/contract-basics"
                },
                {
                    "title": "KISS VM",
                    "href": "/docs/learn/contract-kissvm"
                },
                {
                    "title": "Scripting Basics",
                    "href": "/docs/learn/contract-scripting"
                },
                {
                    "title": "Token/NFT scripts",
                    "href": "/docs/learn/contract-tokenscript"
                }
            ]
        },
    ],
    DEVELOPMENT: [
        {
            "title": "Get Started",
            parentClass: "development",
            "children": [
                {
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-code">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                    ),
                    "title": "Introduction",
                    "href": "/docs/development"
                },
                {
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-component">
                            <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path>
                            <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path>
                            <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path>
                            <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
                        </svg>
                    ),
                    "title": "Single Node Testnet",
                    "href": "/docs/development/start-testnet"
                },
                {
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-network">
                            <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                            <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                            <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                            <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                            <path d="M12 12V8"></path>
                        </svg>
                    ),
                    "title": "Multiple Node Testnet",
                    "href": "/docs/development/testnet-multiple"
                },
                {
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-terminal">
                            <polyline points="4 17 10 11 4 5"></polyline>
                            <line x1="12" x2="20" y1="19" y2="19"></line>
                        </svg>
                    ),
                    "title": "Terminal Commands",
                    "href": "/docs/development/terminal-commands"
                }
            ]
        },
        {
            "title": "MiniDapp Tutorials",
            parentClass: "development",
            "children": [
                {
                    "title": "MiniDapp Hub",
                    "href": "/docs/development/start"
                },
                {
                    "title": "Basic MiniDapp",
                    "href": "/docs/development/basic-minidapp"
                },
                {
                    "title": "Interactive MiniDapp",
                    "href": "/docs/development/interactive-minidapp"
                },
                {
                    "title": "React MiniDapp",
                    "href": "/docs/development/react-minidapp"
                },
                {
                    "title": "MiniDapp Stores",
                    "href": "/docs/development/minidapp-stores"
                }
            ]
        },
        {
            "title": "Smart Contract Tutorials",
            parentClass: "development",
            "children": [
                {
                    "title": "Pruning",
                    "href": "/docs/development/pruning"
                },
                {
                    "title": "Tokens",
                    "href": "/docs/development/tokens"
                },
                {
                    "title": "Layer 1 - On Chain",
                    "href": "/docs/development/layer1"
                },
                {
                    "title": "Layer 2 - Off Chain",
                    "href": "/docs/development/layer2"
                }
            ]
        },
        {
            "title": "Smart Contract Examples",
            parentClass: "development",
            "children": [
                {
                    "title": "Future Cash",
                    "href": "/docs/development/future-cash"
                },
                {
                    "title": "Vestr",
                    "href": "/docs/development/vestr"
                }
            ]
        }
    ]
};