import GoToLink from "@/app/components/GoToLink";
import Intro from "@/app/components/Intro";
import Main from "@/app/components/Main";
import { allPosts } from "contentlayer/generated";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";

export default function Home() {
    const sortedPosts = sortPosts(allPosts);
    const posts = allCoreContent(sortedPosts);

    return (
        <div className="mx-4">
            <Intro />
            <Main posts={posts} />
            <GoToLink name="All Posts" link="/posts" type="posts" />
        </div>
    );
}
