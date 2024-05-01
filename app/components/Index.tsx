import { PostsType } from "@/app/components/Main";
import TableOfContent from "@/app/components/TableOfContent";
import calculateHeadersUrl from "@/app/utilities/calculateHeadersUrl";
import extractCoursePosts from "@/app/utilities/extractCoursePosts";
import { Flex, Heading } from "@radix-ui/themes";

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
    const courses = extractCoursePosts(posts, course);

    const article = courses.filter((course) => {
        return course.slug === id;
    });

    const headers = article[0].toc;

    const resolvedHeaders: Header[] = headers.filter((header: Header) => {
        return header.depth === 2 || header.depth === 3;
    });

    const finalHeaders = resolvedHeaders.map((header) => ({
        ...header,
        url: `#${calculateHeadersUrl(header.value)}`,
    }));

    return (
        <Flex className="sticky top-[5.4rem] pl-10 self-start initial:mb-5 sm:mb-6 initial:mt-0 sm:mt-6 initial:!hidden md:!flex" direction="column" gap={{ initial: "6", sm: "3" }}>
            <Heading className="!text-3xl" as="h2">
                {"Table Of Contents"}
            </Heading>
            <Flex className="border-l-2 border-solid border-orangeSite text-xl font-medium pt-2 mt-2" direction="column">
                {finalHeaders.map((header, index) => (
                    <TableOfContent key={header.url} header={header} index={index} resolvedHeaders={finalHeaders} />
                ))}
            </Flex>
        </Flex>
    );
}
