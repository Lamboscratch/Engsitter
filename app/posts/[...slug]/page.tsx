import Article from "@/app/Components/Article";
import ContainerApp from "@/app/Components/ContainerApp";
import Index from "@/app/Components/Index";
import Navigator from "@/app/Components/Navigator";
import ReleaseDate from "@/app/Components/ReleaseDate";
import { Flex } from "@radix-ui/themes";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";

const Page = async ({ params }: { params: { slug: string[] } }) => {
    const slug = decodeURI(params.slug.join("/"));
    const sortedCoreContents = allCoreContent(sortPosts(allPosts));
    const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug);
    if (postIndex === -1) {
        return notFound();
    }

    const post = allPosts.find((p: any) => p.slug === slug) as Post;

    return (
        <ContainerApp>
            <Flex className="initial:mt-0 sm:mt-5" direction="column">
                <Navigator></Navigator>
                <h1 className={`initial:text-5xl sm:text-6xl text-center font-bold initial:mt-4 sm:mt-5 initial:mb-2 sm:mb-3`}>{post.title}</h1>
                <ReleaseDate style="border-solid border-gray-200 border-b dark:border-zinc-800" date="2005-03-08"></ReleaseDate>
            </Flex>
            <Flex className="initial:!block sm:!flex w-full" justify="between">
                <Article article={post.body.raw} date={new Date()}></Article>
                <Index></Index>
            </Flex>
        </ContainerApp>
    );
};

export default Page;
