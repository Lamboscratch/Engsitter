import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { PostsType } from "../Components/Main";

export default function Course({ posts }: PostsType) {
    const linkClass = "hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4";
    const containerOneClass = "h-[2px] pl-[15px] border border-solid border-orangeSite";
    const containerThreeClass = "border-l-2 border-solid border-orangeSite text-xl font-medium pt-2 mt-2";

    return (
        <Flex className="w-1/2 initial:w-full" direction="column">
            <Heading as="h2" size="7">
                <Link className={linkClass} href={`/${posts[0].path.split("/")[0]}/${posts[0].path.split("/")[1]}`}>
                    {posts[0].path.split("/")[1]}
                </Link>
            </Heading>
            <Flex className={containerThreeClass} direction="column">
                {posts.map((post) => (
                    <Flex key={post.path} align="center">
                        <Box className={containerOneClass}></Box>
                        <Text className="!ml-2">
                            <Link className={linkClass} href={`/${post.path}`}>
                                {post.title}
                            </Link>
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
}
