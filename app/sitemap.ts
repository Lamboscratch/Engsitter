import siteMetadata from "@/app/data/siteMetadata";
import { allPosts } from "contentlayer/generated";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = siteMetadata.siteUrl;

    const postRoutes = allPosts
        .filter((post) => !post.draft)
        .map((post) => ({
            url: `${siteUrl}/${post.slug}`,
            lastModified: post.lastmod || post.date.split("T")[0],
        }));

    const routes = ["", "posts", "tips"].map((route) => ({
        url: `${siteUrl}/${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    return [...routes, ...postRoutes];
}
