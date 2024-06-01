import PostsList from "@/app/components/PostsList";
import type { Post } from "contentlayer/generated";
import { CoreContent } from "pliny/utils/contentlayer.js";

export interface PostsType {
    posts: CoreContent<Post>[];
}

export default function Home({ posts }: PostsType) {
    return (
        <div className="flex flex-col items-start justify-center gap-y-7">
            <h2 className="text-[2.25rem] font-bold leading-none">Recent Posts</h2>
            <PostsList posts={posts} maxDisplay={5} />
        </div>
    );
}
