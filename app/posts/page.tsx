import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import ContainerApp from "../Components/ContainerApp";
import HeadingPrimary from "../Components/HeadingPrimary";
import Link from "next/link";

const index = () => {
    const linkClass = "hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4";
    const containerOneClass = "h-[2px] pl-[15px] border border-solid border-orangeSite";
    const containerTwoClass = "border-l-2 border-solid border-orangeSite ml-9";
    const containerThreeClass = "border-l-2 border-solid border-orangeSite text-xl font-medium pt-2 mt-2";
    const boxOneClass = "w-[2px] border border-solid border-orangeSite self-start h-1/2";
    const boxTwoClass = "w-[2px] border-b border-solid border-orangeSite";
    const boxThreeClass = "h-[2px] pl-[15px] border border-solid border-orangeSite self-center";

    return (
        <ContainerApp>
            <HeadingPrimary styles="!pb-11">All Posts</HeadingPrimary>
            <Flex className="mb-7" direction={{ initial: "column", sm: "row" }} gap={{ initial: "6", sm: "3" }}>
                <Flex className="w-1/2 initial:w-full" direction="column">
                    <Heading as="h2" size="7">
                        <Link className={linkClass} href="/posts/python">
                            Python
                        </Link>
                    </Heading>
                    <Flex className={containerThreeClass} direction="column">
                        <Flex align="center">
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">
                                <Link className={linkClass} href="/posts/python/Introduction-to-Python">
                                    Introduction to Python
                                </Link>
                            </Text>
                        </Flex>
                        <Flex align="center" className={containerTwoClass}>
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className={boxOneClass}></Box>
                                <Box className={boxTwoClass}></Box>
                            </Flex>
                            <Box className={boxThreeClass}></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                        <Flex align="center">
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className={containerTwoClass}>
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className={boxOneClass}></Box>
                                <Box className={boxTwoClass}></Box>
                            </Flex>
                            <Box className={boxThreeClass}></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                        <Flex align="center">
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className={containerTwoClass}>
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className={boxOneClass}></Box>
                                <Box className={boxTwoClass}></Box>
                            </Flex>
                            <Box className={boxThreeClass}></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                        <Flex align="center">
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className={containerTwoClass}>
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className={boxOneClass}></Box>
                                <Box className={boxTwoClass}></Box>
                            </Flex>
                            <Box className={boxThreeClass}></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                        <Flex align="center">
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className={containerTwoClass}>
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className={boxOneClass}></Box>
                                <Box className={boxTwoClass}></Box>
                            </Flex>
                            <Box className={boxThreeClass}></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                        <Flex align="center">
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className={containerTwoClass}>
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className={boxOneClass}></Box>
                                <Box className={boxTwoClass}></Box>
                            </Flex>
                            <Box className={boxThreeClass}></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                        <Flex align="center">
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className={containerTwoClass}>
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className={boxOneClass}></Box>
                                <Box className={boxTwoClass}></Box>
                            </Flex>
                            <Box className={boxThreeClass}></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="w-1/2 initial:w-full" direction="column">
                    <Heading as="h2" size="7">
                        Javascript
                    </Heading>
                    <Flex className={containerThreeClass} direction="column">
                        <Flex align="center">
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className={containerTwoClass}>
                            <Box className={containerOneClass}></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className={boxOneClass}></Box>
                                <Box className={boxTwoClass}></Box>
                            </Flex>
                            <Box className={boxThreeClass}></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </ContainerApp>
    );
};

export default index;
