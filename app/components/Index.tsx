import { PostsType } from "@/app/components/Main";
import TableOfContent from "@/app/components/TableOfContent";
import calculateHeadersUrl from "@/app/utilities/calculateHeadersUrl";
import extractCoursePosts from "@/app/utilities/extractCoursePosts";

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
        <div className="initial:!hidden md:!flex flex-col initial:gap-y-6 sm:gap-y-3 sticky top-[5.4rem] pl-10 self-start initial:mb-5 sm:mb-6 initial:mt-0 sm:mt-6">
            <h2 className="text-3xl font-bold">{"Table Of Contents"}</h2>
            <div className="flex flex-col border-l-2 border-solid border-orangeSite text-xl font-medium pt-2 mt-2">
                {finalHeaders.map((header, index) => (
                    <TableOfContent key={header.url} header={header} index={index} resolvedHeaders={finalHeaders} />
                ))}
            </div>
        </div>
    );
}
