import { allPosts } from "contentlayer/generated";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";
import ContainerApp from "../Components/ContainerApp";
import HeadingPrimary from "../Components/HeadingPrimary";
import Posts from "../Components/Posts";

const page = () => {
    const sortedPosts = sortPosts(allPosts);
    const arrayPosts = allCoreContent(sortedPosts);

    return (
        <ContainerApp>
            <HeadingPrimary styles="!pb-11">All Posts</HeadingPrimary>
            <Posts posts={arrayPosts} />
        </ContainerApp>
    );
};

export default page;
