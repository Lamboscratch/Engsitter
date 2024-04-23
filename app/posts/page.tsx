import ListLayout from "@/app/components/ListLayout";
import { genPageMetadata } from "@/app/seo";
import { allPosts } from "contentlayer/generated";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";

export const metadata = genPageMetadata({ title: "Posts | Engsitter" });

const POSTS_PER_PAGE = 5;

export default function Page() {
    const posts = allCoreContent(sortPosts(allPosts));
    const pageNumber = 1;
    const initialDisplayPosts = posts.slice(POSTS_PER_PAGE * (pageNumber - 1), POSTS_PER_PAGE * pageNumber);
    const pagination = {
        currentPage: pageNumber,
        totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    };

    return <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} />;
}
