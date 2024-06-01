import GoToLink from "@/app/components/GoToLink";
import PostsList from "@/app/components/PostsList";
import PostsNavigator from "@/app/components/PostsNavigator";
import { genPageMetadata } from "@/app/seo";
import coursesNameMap from "@/app/utilities/extractCourseName";
import tagData from "@/public/tag-data.json";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";

const tags = tagData as Record<string, number>;

interface Path {
    course: string;
}

export async function generateMetadata({ params }: { params: { course: string } }): Promise<Metadata> {
    const course = coursesNameMap.get(decodeURI(params.course));
    return genPageMetadata({
        title: `${course}`,
        description: `All posts for ${course} topic`,
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
    const filteredPosts = allCoreContent(sortPosts(allPosts.filter((post) => post.tags[0] === params.course))).reverse();
    let pathsArray: string[] = [];

    Object.entries(tags).forEach(([key, value]) => {
        pathsArray.push(key);
    });

    const postIndex = pathsArray.findIndex((p) => p === params.course);
    if (postIndex === -1) {
        return redirect("/404");
    }

    return (
        <div className="mb-auto mx-4">
            <PostsNavigator tagCounts={tagCounts} />
            <div className="flex initial:flex-col sm:flex-row initial:space-x-0 sm:space-x-6">
                <div className="flex flex-col">
                    <PostsList posts={filteredPosts} maxDisplay={filteredPosts.length} />
                    <GoToLink name="Scroll To Top" link="#top" type="top"></GoToLink>
                </div>
            </div>
        </div>
    );
}
