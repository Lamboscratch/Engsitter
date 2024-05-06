import siteMetadata from "@/app/data/siteMetadata";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "Quantcastbot",
                disallow: "",
                crawlDelay: 1,
            },
            {
                userAgent: "GPTBot",
                disallow: "/",
            },
            {
                userAgent: "ChatGPT-User",
                disallow: "/",
            },
            {
                userAgent: "*",
                disallow: "",
            },
        ],
        sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
    };
}
