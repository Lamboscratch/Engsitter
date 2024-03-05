import extractPosts from "@/app/Utilities/extractPosts";
import { Flex } from "@radix-ui/themes";
import { PostsType } from "../Components/Main";
import Course from "./Course";

export default function Posts({ posts }: PostsType) {
    const courses = extractPosts(posts);

    return (
        <Flex className="mb-7" direction={{ initial: "column", sm: "row" }} gap={{ initial: "6", sm: "3" }}>
            {courses.map((course) => (
                <Course key={course[0].path} posts={course}></Course>
            ))}
        </Flex>
    );
}
