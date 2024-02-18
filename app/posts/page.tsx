import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import ContainerApp from "../Components/ContainerApp";
import HeadingPrimary from "../Components/HeadingPrimary";
import Link from "next/link";

const index = () => {
    return (
        <ContainerApp>
            <HeadingPrimary>All Posts</HeadingPrimary>
            <Flex className="mb-7" direction={{ initial: "column", sm: "row" }} gap={{ initial: "6", sm: "3" }}>
                <Flex className="w-1/2 initial:w-full" direction="column">
                    <Heading as="h2" size="7">
                        <Link className="hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4" href="/posts/python">
                            Python
                        </Link>
                    </Heading>
                    <Flex className="border-l-2 border-solid border-orangeSite text-xl font-medium pt-2 mt-2" direction="column">
                        <Flex align="center">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">
                                <Link className="hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4" href="/posts/python/introduction-to-python">
                                    Introduction to Python
                                </Link>
                            </Text>
                        </Flex>
                        <Flex align="center" className="border-l-2 border-solid border-orangeSite ml-9">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className="w-[2px] border border-solid border-orangeSite self-start h-1/2"></Box>
                                <Box className="w-[2px] border-b border-solid border-orangeSite"></Box>
                            </Flex>
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite self-center"></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                        <Flex align="center">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className="border-l-2 border-solid border-orangeSite ml-9">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className="w-[2px] border border-solid border-orangeSite self-start h-1/2"></Box>
                                <Box className="w-[2px] border-b border-solid border-orangeSite"></Box>
                            </Flex>
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite self-center"></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                        <Flex align="center">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className="border-l-2 border-solid border-orangeSite ml-9">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className="w-[2px] border border-solid border-orangeSite self-start h-1/2"></Box>
                                <Box className="w-[2px] border-b border-solid border-orangeSite"></Box>
                            </Flex>
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite self-center"></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                        <Flex align="center">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className="border-l-2 border-solid border-orangeSite ml-9">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className="w-[2px] border border-solid border-orangeSite self-start h-1/2"></Box>
                                <Box className="w-[2px] border-b border-solid border-orangeSite"></Box>
                            </Flex>
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite self-center"></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                        <Flex align="center">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className="border-l-2 border-solid border-orangeSite ml-9">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className="w-[2px] border border-solid border-orangeSite self-start h-1/2"></Box>
                                <Box className="w-[2px] border-b border-solid border-orangeSite"></Box>
                            </Flex>
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite self-center"></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                        <Flex align="center">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className="border-l-2 border-solid border-orangeSite ml-9">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className="w-[2px] border border-solid border-orangeSite self-start h-1/2"></Box>
                                <Box className="w-[2px] border-b border-solid border-orangeSite"></Box>
                            </Flex>
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite self-center"></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                        <Flex align="center">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className="border-l-2 border-solid border-orangeSite ml-9">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className="w-[2px] border border-solid border-orangeSite self-start h-1/2"></Box>
                                <Box className="w-[2px] border-b border-solid border-orangeSite"></Box>
                            </Flex>
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite self-center"></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="w-1/2 initial:w-full" direction="column">
                    <Heading as="h2" size="7">
                        Javascript
                    </Heading>
                    <Flex className="border-l-2 border-solid border-orangeSite text-xl font-medium pt-2 mt-2" direction="column">
                        <Flex align="center">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className="border-l-2 border-solid border-orangeSite ml-9">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className="w-[2px] border border-solid border-orangeSite self-start h-1/2"></Box>
                                <Box className="w-[2px] border-b border-solid border-orangeSite"></Box>
                            </Flex>
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite self-center"></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </ContainerApp>
    );
};

export default index;
