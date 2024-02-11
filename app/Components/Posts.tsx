import { Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Posts {
    date: string;
    title: string;
    summary: string;
    link: string;
}

const Posts = () => {
    const posts: Posts[] = [
        {
            date: "January 20, 2024",
            title: "Lorem ipsum dolor sit amet.",
            summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni libero, doloribus possimus molestiae exercitationem nisi porro praesentium illum sit iure provident, ipsum architecto eveniet. Cupiditate nesciunt odio illum fugit necessitatibus?",
            link: "/post1",
        },
        {
            date: "March 20, 2024",
            title: "Lorem ipsum dolor sit amet.",
            summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni libero, doloribus possimus molestiae exercitationem nisi porro praesentium illum sit iure provident, ipsum architecto eveniet. Cupiditate nesciunt odio illum fugit necessitatibus?",
            link: "/post2",
        },
        {
            date: "April 20, 2024",
            title: "Lorem ipsum dolor sit amet.",
            summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni libero, doloribus possimus molestiae exercitationem nisi porro praesentium illum sit iure provident, ipsum architecto eveniet. Cupiditate nesciunt odio illum fugit necessitatibus?",
            link: "/post3",
        },
        {
            date: "July 20, 2024",
            title: "Lorem ipsum dolor sit amet.",
            summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni libero, doloribus possimus molestiae exercitationem nisi porro praesentium illum sit iure provident, ipsum architecto eveniet. Cupiditate nesciunt odio illum fugit necessitatibus?",
            link: "/post4",
        },
        {
            date: "September 20, 2024",
            title: "Lorem ipsum dolor sit amet.",
            summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni libero, doloribus possimus molestiae exercitationem nisi porro praesentium illum sit iure provident, ipsum architecto eveniet. Cupiditate nesciunt odio illum fugit necessitatibus?",
            link: "/post5",
        },
    ];

    return (
        <Flex direction="column" align="start" justify="center" gap="5">
            <Heading as="h2" size="8" weight="bold">
                Recent Posts
            </Heading>
            <Flex direction="column" align="start" justify="center" gap="5">
                {posts.map((item) => (
                    <Flex key={item.link} className="p-3 rounded-lg border-solid border-gray-200 border" direction={{ initial: "column", sm: "row" }} gap={{ initial: "3", sm: "9" }}>
                        <Text className="text-nowrap min-w-36">{item.date}</Text>
                        <Flex direction="column" gap="2" justify="start">
                            <Heading as="h3" size="6">
                                <Link className="hover:text-gray-600 transition-colors dark:hover:text-gray-300 dark:color-inherit" href={item.link}>
                                    {item.title}
                                </Link>
                            </Heading>
                            <Text as="p" size="5">
                                {item.summary}
                            </Text>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default Posts;
