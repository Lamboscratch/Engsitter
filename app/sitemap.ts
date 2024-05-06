import siteMetadata from "@/app/data/siteMetadata";
import { allPosts } from "contentlayer/generated";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = siteMetadata.siteUrl;

    const postRoutes = allPosts
        .filter((post) => !post.draft)
        .map((post) => ({
            url: `${siteUrl}/posts/${post.slug}`,
            lastModified: post.lastmod || post.date.split("T")[0],
            changeFrequency: "monthly",
            priority: 0.5,
        }));

    const courses = new Set(postRoutes.map((post) => post.url.split("/")[4]));
    let coursesRoutes: any[] = [];
    courses.forEach((course) => {
        coursesRoutes.push({
            url: `${siteUrl}/posts/${course}`,
            lastModified: new Date().toISOString().split("T")[0],
            changeFrequency: "daily",
            priority: 0.7,
        });
    });

    const routes = ["", "posts", "resources"].map((route) => ({
        url: `${siteUrl}/${route}`,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: "hourly",
        priority: 0.9,
    }));

    return [...routes, ...coursesRoutes, ...postRoutes];
}
