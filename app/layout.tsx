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
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const font = Montserrat({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-custom",
});

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
    return (
        <html lang="en" suppressHydrationWarning>
            <Script id="clarityAnalytics">{`!function(t,e,n,a,c,r,s){t[n]=t[n]||function(){(t[n].q=t[n].q||[]).push(arguments)},(r=e.createElement(a)).async=1,r.src="https://www.clarity.ms/tag/"+c,(s=e.getElementsByTagName(a)[0]).parentNode.insertBefore(r,s)}(window,document,"clarity","script","me3nb86ta9");`}</Script>
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <meta name="google-site-verification" content="n0DE0RbhBXrtxewBN8UX5vwfD0sGHJL8eYxqQabwFJE" />
            <body className={"flex flex-col pl-[calc(100vw-100%)] min-h-dvh relative " + font.variable}>
                {/* <!-- Google tag (gtag.js) --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-MBG9F9XGGN"></script>
                <Script id="googleAnalytics">{`function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-MBG9F9XGGN");`}</Script>
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
                <SpeedInsights />
            </body>
        </html>
    );
}
