import { Flex, Heading, Text } from "@radix-ui/themes";
import type { Post } from "contentlayer/generated";
import Link from "next/link";
import ReleaseDate from "./Components/ReleaseDate";
import { CoreContent } from "pliny/utils/contentlayer.js";

interface Props {
    posts: CoreContent<Post>[];
}

const MAX_DISPLAY = 5;

export default function Home({ posts }: Props) {
    return (
        <Flex direction="column" align="start" justify="center" gap="5">
            <Heading as="h2" size="8" weight="bold">
                Recent Posts
            </Heading>
            <Flex direction="column" align="start" justify="center" gap="5">
                {posts.slice(0, MAX_DISPLAY).map((post) => (
                    <Flex key={post.path} className="p-3 rounded-lg border-solid border-gray-200 border dark:border-zinc-800" direction={{ initial: "column", sm: "row" }} gap={{ initial: "3", sm: "9" }}>
                        <Text className="text-nowrap min-w-36">
                            <ReleaseDate date={post.date}></ReleaseDate>
                        </Text>
                        <Flex direction="column" gap="2" justify="start">
                            <Heading as="h3" size="6">
                                <Link className="hover:text-gray-600 transition-colors dark:hover:text-gray-300 dark:color-inherit" href={post.path}>
                                    {post.title}
                                </Link>
                            </Heading>
                            <Text as="p" size="5">
                                {post.summary}
                            </Text>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
}
