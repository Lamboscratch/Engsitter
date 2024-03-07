import { Box, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import { PostsType } from "./Main";
import extractCoursePosts from "../Utilities/extractCoursePosts";

interface Props {
    posts: PostsType["posts"];
    course: string;
}

export default function Index({ posts, course }: Props) {
    const linkClass = "hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4";
    const boxClassOne = "h-[2px] pl-[15px] border border-solid border-orangeSite";

    const courses = extractCoursePosts(posts, course);

    return (
        <Flex className="sticky top-[5.4rem] pl-10 self-start initial:mb-5 sm:mb-6 initial:mt-0 sm:mt-7 initial:!hidden md:!flex" direction="column" gap={{ initial: "6", sm: "3" }}>
            <Heading className="!text-[1.875rem]" as="h2" size="7">
                <Link className={linkClass} href={`/${courses[0].path.split("/")[0]}/${courses[0].path.split("/")[1]}`}>
                    {courses[0].path.split("/")[1]}
                </Link>
            </Heading>
            <Flex className="border-l-2 border-solid border-orangeSite text-xl font-medium pt-2 mt-2" direction="column">
                {courses.map((course) => (
                    <Flex key={course.path} align="center">
                        <Box className={boxClassOne}></Box>
                        <Flex className="ml-2">
                            <Link className={linkClass} href={`/${course.path}`}>
                                {course.title}
                            </Link>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
}
