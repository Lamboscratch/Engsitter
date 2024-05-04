import Article from "@/app/components/Article";
import ContainerApp from "@/app/components/ContainerApp";
import GoToLink from "@/app/components/GoToLink";
import Index from "@/app/components/Index";
import Navigator from "@/app/components/Navigator";
import ReleaseDate from "@/app/components/ReleaseDate";
import ScrollBar from "@/app/components/ScrollBar";
import siteMetadata from "@/app/data/siteMetadata";
import NotFoundPage from "@/app/not-found";
import { Flex } from "@radix-ui/themes";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
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
        title: `${post.title} | ${siteMetadata.title}`,
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
    const paths = allPosts.map((p: any) => ({ slug: `${p._raw.sourceFileDir.replace("posts/", "")}/${p.title.toLowerCase().replaceAll(" ", "-")}`.split("/") }));

    return paths;
};

export default function Page({ params }: { params: { slug: string[] } }) {
    const slug = params.slug.join("/");
    const sortedCoreContents = allCoreContent(sortPosts(allPosts));
    const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug);
    if (postIndex === -1) {
        return <NotFoundPage />;
    }

    const post = allPosts.find((p: any) => p.slug === slug) as Post;

    return (
        <ContainerApp>
            <ScrollBar />
            <Flex direction="column">
                <Navigator title={post.title} />
                <h1 className="text-5xl text-center font-bold mt-5 mb-3">{post.title}</h1>
                <ReleaseDate style="pb-5 border-solid border-gray-200 border-b dark:border-zinc-700" date={post.date} />
            </Flex>
            <Flex className="initial:!block sm:!flex w-full" justify="between">
                <Article article={post.body.raw} />
                <Index posts={sortedCoreContents} course={post.slug.split("/")[1]} id={post.slug} />
            </Flex>
            <GoToLink name="Scroll To Top" link="#top" type="top"></GoToLink>
        </ContainerApp>
    );
}
