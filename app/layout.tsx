import AdBlockerDetector from "@/app/components/AdBlockerDetector";
import { ChangeColorProvider } from "@/app/components/ChangeColorProvider";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import SearchProvider from "@/app/components/SearchProvider";
import siteMetadata from "@/app/data/siteMetadata";
import "@/app/globals.css";
import logoDark from "@/public/images/logo_dark.svg";
import logoLight from "@/public/images/logo_light.svg";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";

const font = Montserrat({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-custom",
});

// Script UMAMI
// <script defer src="https://analytics.us.umami.is/script.js" data-website-id="9dff9671-a95a-45a4-ae29-667158928411"></script>

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
        default: siteMetadata.title,
        template: `%s | ${siteMetadata.title}`,
    },
    description: siteMetadata.description,
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: "./",
        siteName: siteMetadata.title,
        images: [siteMetadata.socialBanner],
        locale: "en_US",
        type: "website",
    },
    alternates: {
        canonical: "./",
        types: {
            "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: [
        {
            rel: "icon",
            url: "/favicon.ico",
            sizes: "any",
        },
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
    twitter: {
        title: siteMetadata.title,
        card: "summary_large_image",
        images: [siteMetadata.socialBanner],
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const nonce = headers().get("x-nonce");

    return (
        <html lang="en" suppressHydrationWarning>
            <Script src="https://us.umami.is/script.js" data-website-id="9dff9671-a95a-45a4-ae29-667158928411" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <meta name="google-site-verification" content="n0DE0RbhBXrtxewBN8UX5vwfD0sGHJL8eYxqQabwFJE" />
            <body className={"flex flex-col pl-[calc(100vw-100%)] min-h-dvh relative " + font.variable}>
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
