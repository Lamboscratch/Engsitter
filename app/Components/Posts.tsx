import { Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

const Posts = () => {
    return (
        <Flex direction="column" align="start" justify="center" gap="5">
            <Heading as="h2" size="8" weight="bold">
                Recent Posts
            </Heading>
            <Flex direction="column" align="start" justify="center" gap="3">
                <Flex direction={{ initial: "column", sm: "row" }} gap={{ initial: "3", sm: "9" }}>
                    <Text className="text-nowrap min-w-36">January 20, 2024</Text>
                    <Flex direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link href="/post1">Lorem ipsum dolor sit amet.</Link>
                        </Heading>
                        <Text as="p" size="3">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni libero, doloribus possimus molestiae exercitationem nisi porro praesentium illum sit iure provident, ipsum architecto eveniet. Cupiditate nesciunt odio illum fugit necessitatibus?{" "}
                        </Text>
                    </Flex>
                </Flex>
                <Flex direction={{ initial: "column", sm: "row" }} gap={{ initial: "3", sm: "9" }}>
                    <Text className="text-nowrap min-w-36">March 20, 2024</Text>
                    <Flex direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link href="/post2">Lorem ipsum dolor sit amet.</Link>
                        </Heading>
                        <Text as="p" size="3">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni libero, doloribus possimus molestiae exercitationem nisi porro praesentium illum sit iure provident, ipsum architecto eveniet. Cupiditate nesciunt odio illum fugit necessitatibus?{" "}
                        </Text>
                    </Flex>
                </Flex>
                <Flex direction={{ initial: "column", sm: "row" }} gap={{ initial: "3", sm: "9" }}>
                    <Text className="text-nowrap min-w-36">April 20, 2024</Text>
                    <Flex direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link href="/post3">Lorem ipsum dolor sit amet.</Link>
                        </Heading>
                        <Text as="p" size="3">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni libero, doloribus possimus molestiae exercitationem nisi porro praesentium illum sit iure provident, ipsum architecto eveniet. Cupiditate nesciunt odio illum fugit necessitatibus?{" "}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Posts;
