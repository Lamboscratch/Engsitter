"use client";

import searchResults from "@/public/search.json";
import { Box, Flex } from "@radix-ui/themes";
import { KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarSearch } from "kbar";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { CiSearch } from "react-icons/ci";
import SearchResults from "./SearchResults";

interface Props {
    children: ReactNode;
}

export default function SearchProvider({ children }: Props) {
    const router = useRouter();

    const dynamicActions = searchResults.map((post) => ({
        id: post.path,
        name: post.title,
        keywords: post?.summary || "",
        section: "Blog",
        subtitle: post.date,
        perform: () => router.push(`/${post.path}`),
    }));

    const staticActions = [
        {
            id: "home",
            name: "Home",
            keywords: "",
            shortcut: ["h"],
            section: "Nav",
            perform: () => router.push("/"),
        },
        {
            id: "posts",
            name: "Posts",
            keywords: "",
            shortcut: ["p"],
            section: "Nav",
            perform: () => router.push("/Posts"),
        },
        {
            id: "tips",
            name: "Tips",
            keywords: "",
            shortcut: ["t"],
            section: "Nav",
            perform: () => router.push("/Tips"),
        },
        ...dynamicActions,
    ];

    return (
        <KBarProvider actions={staticActions}>
            <KBarPortal>
                <KBarPositioner className="bg-gray-300/50 p-4 backdrop-blur backdrop-filter dark:bg-black/50">
                    <KBarAnimator className="w-full max-w-xl">
                        <Box className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-blackPrimary">
                            <Flex className="flex items-center space-x-4 p-4">
                                <CiSearch className="w-[1.65rem] h-[1.65rem]" />
                                <KBarSearch className="radix-themes h-8 w-full bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none dark:text-gray-200 dark:placeholder-gray-500" />
                                <kbd className="inline-block whitespace-nowrap rounded border px-1.5 align-middle font-medium tracking-wide text-sm text-gray-400 border-gray-400">ESC</kbd>
                            </Flex>
                            <SearchResults />
                        </Box>
                    </KBarAnimator>
                </KBarPositioner>
            </KBarPortal>
            {children}
        </KBarProvider>
    );
}
