import { Body } from "@/app/layout.client";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Provider } from "@/components/provider";
import { headers } from "next/headers";
import "./global.css";
import { Metadata } from "next";
import Observer from "@/components/observer";
const inter = Inter({
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";

const SITE_URL = "https://docs.minima.global";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icons/icon.png",
        href: "/icons/icon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/icon.png",
        href: "/icons/icon.png",
      },
    ],
  },
};

export default async function Layout({ children }: { children: ReactNode }) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce");
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <Body>
        <Observer>
          <Provider nonce={nonce ?? undefined}>{children}</Provider>
        </Observer>
      </Body>
    </html>
  );
}
