import ContainerApp from "@/app/components/ContainerApp";
import Pagination from "@/app/components/Pagination";
import PostsList from "@/app/components/PostsList";
import PostsNavigator from "@/app/components/PostsNavigator";
import tagData from "@/public/tag-data.json";
import { Flex } from "@radix-ui/themes";
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
        <ContainerApp style="mb-auto">
            <PostsNavigator tagCounts={tagCounts} />
            <div className="flex initial:flex-col sm:flex-row initial:space-x-0 sm:space-x-6">
                <Flex direction="column">
                    <PostsList posts={displayPosts} maxDisplay={5} />
                    {pagination && pagination.totalPages > 1 && <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />}
                </Flex>
            </div>
        </ContainerApp>
    );
}
