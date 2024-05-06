import ListLayout from "@/app/components/ListLayout";
import { genPageMetadata } from "@/app/seo";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";

const POSTS_PER_PAGE = 5;

export async function generateMetadata({ params }: { params: { page: string } }): Promise<Metadata> {
    const page = decodeURI(params.page);
    return genPageMetadata({
        title: `Page ${page}`,
        description: `List of posts - page ${page}`,
    });
}

export const generateStaticParams = async () => {
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
    const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }));

    return paths;
};

export default function Page({ params }: { params: { page: string } }) {
    const posts = allCoreContent(sortPosts(allPosts));
    const pageNumber = parseInt(params.page as string);
    const initialDisplayPosts = posts.slice(POSTS_PER_PAGE * (pageNumber - 1), POSTS_PER_PAGE * pageNumber);
    const pagination = {
        currentPage: pageNumber,
        totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    };

    return <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} />;
}
