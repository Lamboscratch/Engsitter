import ContainerApp from "@/app/Components/ContainerApp";
import HeadingPrimary from "@/app/Components/HeadingPrimary";
import { allPosts } from "contentlayer/generated";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";
import CoursePosts from "@/app/Components/CoursePosts";

const page = () => {
    const sortedPosts = sortPosts(allPosts);
    const arrayPosts = allCoreContent(sortedPosts);

    const course = "Python";

    return (
        <ContainerApp>
            <HeadingPrimary styles="!pb-11">{course}</HeadingPrimary>
            <CoursePosts posts={arrayPosts} course={course} />
        </ContainerApp>
    );
};

export default page;
