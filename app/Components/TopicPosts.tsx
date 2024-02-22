import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

const TopicPosts = () => {
    return (
        <Flex className="mb-7" direction="column" align="start" justify="center" gap="7">
            <Flex direction="column" gap="3">
                <Heading as="h2" size="7" weight="bold">
                    Chapter 1
                </Heading>
                <Grid columns={{ initial: "2", sm: "3" }} align="start" justify="center" gap="5">
                    <Flex className="p-3 rounded-lg border border-solid border-gray-200 dark:border-zinc-800" direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link className="hover:text-gray-600 transition-colors dark:hover:text-gray-300 dark:color-inherit" href="/posts/python/introduction-to-python">
                                Introduction to Python
                            </Link>
                        </Heading>
                        <Text as="p" size="5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, a?
                        </Text>
                    </Flex>
                    <Flex className="p-3 rounded-lg border border-solid border-gray-200 dark:border-zinc-800" direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link className="hover:text-gray-600 transition-colors dark:hover:text-gray-300 dark:color-inherit" href="/">
                                Test
                            </Link>
                        </Heading>
                        <Text as="p" size="5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, a?
                        </Text>
                    </Flex>
                    <Flex className="p-3 rounded-lg border border-solid border-gray-200 dark:border-zinc-800" direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link className="hover:text-gray-600 transition-colors dark:hover:text-gray-300 dark:color-inherit" href="/">
                                Test
                            </Link>
                        </Heading>
                        <Text as="p" size="5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, a?
                        </Text>
                    </Flex>
                    <Flex className="p-3 rounded-lg border border-solid border-gray-200 dark:border-zinc-800" direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link className="hover:text-gray-600 transition-colors dark:hover:text-gray-300 dark:color-inherit" href="/">
                                Test
                            </Link>
                        </Heading>
                        <Text as="p" size="5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, a?
                        </Text>
                    </Flex>
                </Grid>
            </Flex>
            <Flex direction="column" gap="3">
                <Heading as="h2" size="7" weight="bold">
                    Chapter 2
                </Heading>
                <Grid columns={{ initial: "2", sm: "3" }} align="start" justify="center" gap="5">
                    <Flex className="p-3 rounded-lg border border-solid border-gray-200 dark:border-zinc-800" direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link className="hover:text-gray-600 transition-colors dark:hover:text-gray-300 dark:color-inherit" href="/">
                                Test
                            </Link>
                        </Heading>
                        <Text as="p" size="5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, a?
                        </Text>
                    </Flex>
                    <Flex className="p-3 rounded-lg border border-solid border-gray-200 dark:border-zinc-800" direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link className="hover:text-gray-600 transition-colors dark:hover:text-gray-300 dark:color-inherit" href="/">
                                Test
                            </Link>
                        </Heading>
                        <Text as="p" size="5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, a?
                        </Text>
                    </Flex>
                    <Flex className="p-3 rounded-lg border border-solid border-gray-200 dark:border-zinc-800" direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link className="hover:text-gray-600 transition-colors dark:hover:text-gray-300 dark:color-inherit" href="/">
                                Test
                            </Link>
                        </Heading>
                        <Text as="p" size="5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, a?
                        </Text>
                    </Flex>
                    <Flex className="p-3 rounded-lg border border-solid border-gray-200 dark:border-zinc-800" direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link className="hover:text-gray-600 transition-colors dark:hover:text-gray-300 dark:color-inherit" href="/">
                                Test
                            </Link>
                        </Heading>
                        <Text as="p" size="5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, a?
                        </Text>
                    </Flex>
                </Grid>
            </Flex>
            <Flex direction="column" gap="3">
                <Heading as="h2" size="7" weight="bold">
                    Chapter 3
                </Heading>
                <Grid columns={{ initial: "2", sm: "3" }} align="start" justify="center" gap="5">
                    <Flex className="p-3 rounded-lg border border-solid border-gray-200 dark:border-zinc-800" direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link className="hover:text-gray-600 transition-colors dark:hover:text-gray-300 dark:color-inherit" href="/">
                                Test
                            </Link>
                        </Heading>
                        <Text as="p" size="5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, a?
                        </Text>
                    </Flex>
                    <Flex className="p-3 rounded-lg border border-solid border-gray-200 dark:border-zinc-800" direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link className="hover:text-gray-600 transition-colors dark:hover:text-gray-300 dark:color-inherit" href="/">
                                Test
                            </Link>
                        </Heading>
                        <Text as="p" size="5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, a?
                        </Text>
                    </Flex>
                    <Flex className="p-3 rounded-lg border border-solid border-gray-200 dark:border-zinc-800" direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link className="hover:text-gray-600 transition-colors dark:hover:text-gray-300 dark:color-inherit" href="/">
                                Test
                            </Link>
                        </Heading>
                        <Text as="p" size="5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, a?
                        </Text>
                    </Flex>
                    <Flex className="p-3 rounded-lg border border-solid border-gray-200 dark:border-zinc-800" direction="column" gap="2" justify="start">
                        <Heading as="h3" size="6">
                            <Link className="hover:text-gray-600 transition-colors dark:hover:text-gray-300 dark:color-inherit" href="/">
                                Test
                            </Link>
                        </Heading>
                        <Text as="p" size="5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, a?
                        </Text>
                    </Flex>
                </Grid>
            </Flex>
        </Flex>
    );
};

export default TopicPosts;
