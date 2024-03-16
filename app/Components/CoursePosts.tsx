import { PostsType } from "./Main";
import extractCoursePosts from "../Utilities/extractCoursePosts";
import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
    posts: PostsType["posts"];
    course: string;
}

export default function CoursePosts({ posts, course }: Props) {
    const courses = extractCoursePosts(posts, course);
    const linkClass = "hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4";
    const containerPostClass = "p-3 rounded-lg border border-solid border-gray-200 dark:border-zinc-700";

    return (
        <Flex className="mb-7" direction="column" align="start" justify="center" gap="7">
            <Grid columns={{ initial: "1", sm: "3" }} align="start" justify="center" gap="5">
                {courses.map((course) => (
                    <Flex key={course.path} className={containerPostClass} direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link className={linkClass} href={`/${course.path}`}>
                                {course.title}
                            </Link>
                        </Heading>
                        <Text as="p" size="5">
                            {course.summary}
                        </Text>
                    </Flex>
                ))}
            </Grid>
        </Flex>
    );
}
