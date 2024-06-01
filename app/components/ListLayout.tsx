import Pagination from "@/app/components/Pagination";
import PostsList from "@/app/components/PostsList";
import PostsNavigator from "@/app/components/PostsNavigator";
import tagData from "@/public/tag-data.json";
import type { Post } from "contentlayer/generated";
import { CoreContent } from "pliny/utils/contentlayer.js";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
}

interface ListLayoutProps {
    posts: CoreContent<Post>[];
    initialDisplayPosts?: CoreContent<Post>[];
    pagination?: PaginationProps;
}

export default function ListLayout({ posts, initialDisplayPosts = [], pagination }: ListLayoutProps) {
    const tagCounts = tagData as Record<string, number>;

    const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;

    return (
        <div className="mb-auto mx-4">
            <PostsNavigator tagCounts={tagCounts} />
            <div className="flex initial:flex-col sm:flex-row initial:space-x-0 sm:space-x-6">
                <div className="flex flex-col">
                    <PostsList posts={displayPosts} maxDisplay={5} />
                    {pagination && pagination.totalPages > 1 && <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />}
                </div>
            </div>
        </div>
    );
}
