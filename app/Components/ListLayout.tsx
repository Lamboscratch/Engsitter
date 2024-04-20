"use client";

import ContainerApp from "@/app/components/ContainerApp";
import PostsList from "@/app/components/PostsList";
import PostsNavigator from "@/app/components/PostsNavigator";
import tagData from "@/public/tag-data.json";
import { Flex } from "@radix-ui/themes";
import type { Post } from "contentlayer/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

function Pagination({ totalPages, currentPage }: PaginationProps) {
    const pathname = usePathname();
    const basePath = pathname.split("/")[1];
    const prevPage = currentPage - 1 > 0;
    const nextPage = currentPage + 1 <= totalPages;

    return (
        <div className="space-y-2 py-5 md:space-y-5">
            <nav className="flex justify-between">
                {!prevPage && (
                    <button className="text-base cursor-auto disabled:opacity-50" disabled={!prevPage}>
                        Previous
                    </button>
                )}
                {prevPage && (
                    <Link className="text-base" href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/Page/${currentPage - 1}`} rel="prev">
                        Previous
                    </Link>
                )}
                <span className="text-base">
                    {currentPage} of {totalPages}
                </span>
                {!nextPage && (
                    <button className="text-base cursor-auto disabled:opacity-50" disabled={!nextPage}>
                        Next
                    </button>
                )}
                {nextPage && (
                    <Link className="text-base" href={`/${basePath}/Page/${currentPage + 1}`} rel="next">
                        Next
                    </Link>
                )}
            </nav>
        </div>
    );
}

export default function ListLayout({ posts, initialDisplayPosts = [], pagination }: ListLayoutProps) {
    const pathname = usePathname();
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
