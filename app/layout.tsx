import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import logoDark from "../public/images/logo-dark.svg";
import logoLight from "../public/images/logo-light.svg";
import { ChangeColorProvider } from "./Components/ChangeColorProvider";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={"flex flex-col min-h-dvh relative " + poppins.variable}>
                <ChangeColorProvider>
                    <Theme>
                        <NavBar></NavBar>
                        <main>{children}</main>
                        <Footer></Footer>
                    </Theme>
                </ChangeColorProvider>
            </body>
        </html>
    );
}
