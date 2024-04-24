import PostsList from "@/app/components/PostsList";
import { Flex, Heading } from "@radix-ui/themes";
import type { Post } from "contentlayer/generated";
import { CoreContent } from "pliny/utils/contentlayer.js";

export interface PostsType {
    posts: CoreContent<Post>[];
}

export default function Home({ posts }: PostsType) {
    return (
        <Flex direction="column" align="start" justify="center" gap="6">
            <Heading className="!text-[2.25rem]" as="h2" weight="bold">
                Recent Posts
            </Heading>
            <PostsList posts={posts} maxDisplay={5} />
        </Flex>
    );
}
