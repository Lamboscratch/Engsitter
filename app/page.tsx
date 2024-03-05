import ContainerApp from "./Components/ContainerApp";
import GoToLink from "./Components/GoToLink";
import Intro from "./Components/Intro";
import { sortPosts, allCoreContent } from "pliny/utils/contentlayer.js";
import { allPosts } from "contentlayer/generated";
import Main from "./Components/Main";

export default function Home() {
    const sortedPosts = sortPosts(allPosts);
    const posts = allCoreContent(sortedPosts);

    return (
        <ContainerApp>
            <Intro />
            <Main posts={posts} />
            <GoToLink name="All Posts" link="/Posts" />
        </ContainerApp>
    );
}
