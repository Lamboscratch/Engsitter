import Article from "@/app/Components/Article";
import ContainerApp from "@/app/Components/ContainerApp";
import siteMetadata from "@/app/Data/siteMetadata";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata | undefined> {
    const slug = decodeURI(params.slug.join("/"));
    const post = allPosts.find((p: any) => p.slug === slug);
    if (!post) {
        return;
    }

    const publishedAt = new Date(post.date).toISOString();
    const modifiedAt = new Date(post.lastmod || post.date).toISOString();
    let imageList = [siteMetadata.socialBanner];
    if (post.images) {
        imageList = typeof post.images === "string" ? [post.images] : post.images;
    }
    const ogImages = imageList.map((img) => {
        return {
            url: img.includes("http") ? img : siteMetadata.siteUrl + img,
        };
    });

    return {
        title: post.title,
        description: post.summary,
        openGraph: {
            title: post.title,
            description: post.summary,
            siteName: siteMetadata.title,
            locale: "en_US",
            type: "article",
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            url: "./",
            images: ogImages,
            authors: siteMetadata.author,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.summary,
            images: imageList,
        },
    };
}

export const generateStaticParams = async () => {
    const paths = allPosts.map((p: any) => ({ slug: p.slug.split("/") }));

    return paths;
};

export default async function Page({ params }: { params: { slug: string[] } }) {
    const slug = decodeURI(params.slug.join("/"));
    // Filter out drafts in production
    const sortedCoreContents = allCoreContent(sortPosts(allPosts));
    const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug);
    if (postIndex === -1) {
        return notFound();
    }

    const post = allPosts.find((p: any) => p.slug === slug) as Post;

    console.log(post.readingTime);

    return (
        <ContainerApp>
            <Article article={post.body.raw} date={new Date()}></Article>
        </ContainerApp>
    );
}
