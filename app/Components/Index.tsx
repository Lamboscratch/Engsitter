import { Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import extractCoursePosts from "../Utilities/extractCoursePosts";
import { PostsType } from "./Main";
import TableOfContent from "./TableOfContent";
import calculateHeadersUrl from "../Utilities/calculateHeadersUrl";

interface Props {
    posts: PostsType["posts"];
    course: string;
    id: string;
}

export interface Header {
    value: string;
    url: string;
    depth: number;
}

export default function Index({ posts, course, id }: Props) {
    const linkClass = "hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4";

    const courses = extractCoursePosts(posts, course);

    const article = courses.filter((course) => {
        return course.path === id;
    });

    const headers = article[0].toc;

    const resolvedHeaders: Header[] = headers.filter((header: Header) => {
        return header.depth === 2 || header.depth === 3;
    });

    const finalHeaders = resolvedHeaders.map((header) => ({
        ...header,
        url: `#${calculateHeadersUrl(header.value)}`,
    }));

    console.log(finalHeaders);

    return (
        <Flex className="sticky top-[5.4rem] pl-10 self-start initial:mb-5 sm:mb-6 initial:mt-0 sm:mt-7 initial:!hidden md:!flex" direction="column" gap={{ initial: "6", sm: "3" }}>
            <Heading className="!text-[1.875rem]" as="h2" size="7">
                <Link className={linkClass} href={`/${courses[0].path.split("/")[0]}/${courses[0].path.split("/")[1]}`}>
                    {courses[0].path.split("/")[1]}
                </Link>
            </Heading>
            <Flex className="border-l-2 border-solid border-orangeSite text-xl font-medium pt-2 mt-2" direction="column">
                {finalHeaders.map((header, index) => (
                    <TableOfContent key={header.url} header={header} path={article[0].path} index={index} resolvedHeaders={finalHeaders} />
                ))}
            </Flex>
        </Flex>
    );
}
