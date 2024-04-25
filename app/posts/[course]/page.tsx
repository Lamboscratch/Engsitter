import ContainerApp from "@/app/components/ContainerApp";
import GoToLink from "@/app/components/GoToLink";
import PostsList from "@/app/components/PostsList";
import PostsNavigator from "@/app/components/PostsNavigator";
import siteMetadata from "@/app/data/siteMetadata";
import { genPageMetadata } from "@/app/seo";
import coursesNameMap from "@/app/utilities/extractCourseName";
import tagData from "@/public/tag-data.json";
import { Flex } from "@radix-ui/themes";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";

const tags = tagData as Record<string, number>;

interface Path {
    course: string;
}

export async function generateMetadata({ params }: { params: { course: string } }): Promise<Metadata> {
    const course = coursesNameMap.get(decodeURI(params.course));
    return genPageMetadata({
        title: `${course} | ${siteMetadata.title}`,
        description: `List of posts - ${course}`,
    });
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
                    <GoToLink name="Back To Top" link="#top" type="top"></GoToLink>
                </Flex>
            </div>
        </ContainerApp>
    );
}
