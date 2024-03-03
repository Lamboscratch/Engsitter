import Article from "@/app/Components/Article";
import ContainerApp from "@/app/Components/ContainerApp";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";

const Page = async ({ params }: { params: { slug: string[] } }) => {
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
};

export default Page;
