import ContainerApp from "@/app/components/ContainerApp";
import PostsList from "@/app/components/PostsList";
import PostsNavigator from "@/app/components/PostsNavigator";
import tagData from "@/public/tag-data.json";
import { Flex } from "@radix-ui/themes";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";

const tags = tagData as Record<string, number>;

interface Path {
    course: string;
}

export const generateStaticParams = async () => {
    let paths: Path[] = [];
    Object.entries(tags).forEach(([key, value]) => {
        paths.push({
            course: key,
        });
    });

    return paths;
};

export default function Page({ params }: { params: { course: string } }) {
    const tagCounts = tagData as Record<string, number>;
    const filteredPosts = allCoreContent(sortPosts(allPosts.filter((post) => post.tags[0] === params.course)));
    let pathsArray: string[] = [];

    Object.entries(tags).forEach(([key, value]) => {
        pathsArray.push(key);
    });

    const postIndex = pathsArray.findIndex((p) => p === params.course);
    if (postIndex === -1) {
        return notFound();
    }

    return (
        <ContainerApp style="mb-auto">
            <PostsNavigator tagCounts={tagCounts} />
            <div className="flex initial:flex-col sm:flex-row initial:space-x-0 sm:space-x-6">
                <Flex direction="column">
                    <PostsList posts={filteredPosts} maxDisplay={filteredPosts.length} />
                    <div className="w-full h-16"></div>
                </Flex>
            </div>
        </ContainerApp>
    );
}
