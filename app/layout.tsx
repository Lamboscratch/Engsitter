import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { headers } from "next/headers";
import logoDark from "../public/images/logo-dark.svg";
import logoLight from "../public/images/logo-light.svg";
import AdBlockerDetector from "./Components/AdBlockerDetector";
import { ChangeColorProvider } from "./Components/ChangeColorProvider";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import SearchProvider from "./Components/SearchProvider";
import siteMetadata from "./Data/siteMetadata";
import "./globals.css";
import "./theme-config.css";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

// Script UMAMI
// <script defer src="https://analytics.us.umami.is/script.js" data-website-id="9dff9671-a95a-45a4-ae29-667158928411"></script>

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: "Engsitter",
    description: "Comprehensive articles on networking and cybersecurity",
    icons: [
        {
            rel: "icon",
            type: "image/x-icon",
            url: logoDark.src,
            media: "(prefers-color-scheme: light)",
        },
        {
            rel: "icon",
            type: "image/x-icon",
            url: logoLight.src,
            media: "(prefers-color-scheme: dark)",
        },
    ],
    alternates: {
        canonical: "./",
        types: {
            "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
        },
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const nonce = headers().get("x-nonce");

    return (
        <html lang="en" suppressHydrationWarning>
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <body className={"flex flex-col pl-[calc(100vw-100%)] min-h-dvh relative " + poppins.variable}>
                <ChangeColorProvider>
                    <Theme>
                        <SearchProvider>
                            <AdBlockerDetector />
                            <NavBar />
                            <main>{children}</main>
                            <Footer />
                        </SearchProvider>
                    </Theme>
                </ChangeColorProvider>
            </body>
        </html>
    );
}
