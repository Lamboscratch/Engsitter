import Article from "@/app/components/Article";
import GoToLink from "@/app/components/GoToLink";
import Index from "@/app/components/Index";
import Navigator from "@/app/components/Navigator";
import ReleaseDate from "@/app/components/ReleaseDate";
import ScrollBar from "@/app/components/ScrollBar";
import siteMetadata from "@/app/data/siteMetadata";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { redirect } from "next/navigation";
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
        title: `${post.title}`,
        description: post.summary,
        openGraph: {
            title: `${post.title} | ${siteMetadata.title}`,
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
            title: `${post.title} | ${siteMetadata.title}`,
            description: post.summary,
            images: imageList,
        },
    };
}

export const generateStaticParams = async () => {
    const paths = allPosts.map((p: any) => ({ slug: `${p._raw.sourceFileDir.replace("posts/", "")}/${p.title.toLowerCase().replaceAll(" ", "-").replaceAll(":", "")}`.split("/") }));

    return paths;
};

export default function Page({ params }: { params: { slug: string[] } }) {
    const slug = params.slug.join("/");
    const sortedCoreContents = allCoreContent(sortPosts(allPosts));
    const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug);
    if (postIndex === -1) {
        return redirect("/404");
    }

    const post = allPosts.find((p: any) => p.slug === slug) as Post;

    return (
        <div className="mx-4">
            <ScrollBar />
            <div className="flex flex-col">
                <Navigator title={post.title} />
                <h1 className="text-5xl text-center font-bold mt-5 mb-3">{post.title}</h1>
                <ReleaseDate style="pb-5 border-solid border-gray-200 border-b dark:border-zinc-700" date={post.date} />
            </div>
            <div className="initial:!block sm:!flex justify-between w-full">
                <Article article={post.body.raw} />
                <Index posts={sortedCoreContents} course={post.slug.split("/")[1]} id={post.slug} />
            </div>
            <GoToLink name="Scroll To Top" link="#top" type="top"></GoToLink>
        </div>
    );
}
