import siteMetadata from "@/app/data/siteMetadata";
import { Metadata } from "next";

interface PageSEOProps {
    title: string;
    description?: string;
    image?: string;
}

export function genPageMetadata({ title, description, image }: PageSEOProps): Metadata {
    return {
        title,
        description: description || siteMetadata.description,
        openGraph: {
            title: `${title} | ${siteMetadata.title}`,
            description: description || siteMetadata.description,
            url: "./",
            siteName: siteMetadata.title,
            images: image ? [image] : [siteMetadata.socialBanner],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            title: `${title} | ${siteMetadata.title}`,
            card: "summary_large_image",
            images: image ? [image] : [siteMetadata.socialBanner],
        },
    };
}
