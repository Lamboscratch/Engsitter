import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

const Index = () => {
    const linkClass = "hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4";
    const containerClass = "border-l-2 border-solid border-orangeSite ml-9";
    const boxClassOne = "h-[2px] pl-[15px] border border-solid border-orangeSite";
    const boxClassTwo = "w-[2px] border border-solid border-orangeSite self-start h-1/2";
    const boxClassThree = "w-[2px] border-b border-solid border-orangeSite";
    const boxClassFour = "h-[2px] pl-[15px] border border-solid border-orangeSite self-center";

    return (
        <Flex className="sticky top-[5.4rem] pl-10 self-start initial:mb-5 sm:mb-6 initial:mt-0 sm:mt-7 initial:!hidden md:!flex" direction="column" gap={{ initial: "6", sm: "3" }}>
            <Heading as="h2" size="7">
                <Link className={linkClass} href="/Posts/Python">
                    Python
                </Link>
            </Heading>
            <Flex className="border-l-2 border-solid border-orangeSite text-xl font-medium pt-2 mt-2" direction="column">
                <Flex align="center">
                    <Box className={boxClassOne}></Box>
                    <Text className="!ml-2">
                        <Link className={linkClass} href="/Posts/Python/Introduction-to-Python">
                            Introduction to Python
                        </Link>
                    </Text>
                </Flex>
                <Flex align="center" className={containerClass}>
                    <Box className={boxClassOne}></Box>
                    <Text className="!ml-2">Come posso io stare tranquillo se qui non va niente bene?</Text>
                </Flex>
                <Flex className="ml-9">
                    <Flex direction="column" className="h-auto">
                        <Box className={boxClassTwo}></Box>
                        <Box className={boxClassThree}></Box>
                    </Flex>
                    <Box className={boxClassFour}></Box>
                    <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                </Flex>
                <Flex align="center">
                    <Box className={boxClassOne}></Box>
                    <Text className="!ml-2">components</Text>
                </Flex>
                <Flex align="center" className={containerClass}>
                    <Box className={boxClassOne}></Box>
                    <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                </Flex>
                <Flex className="ml-9">
                    <Flex direction="column" className="h-auto">
                        <Box className={boxClassTwo}></Box>
                        <Box className={boxClassThree}></Box>
                    </Flex>
                    <Box className={boxClassFour}></Box>
                    <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                </Flex>
                <Flex align="center">
                    <Box className={boxClassOne}></Box>
                    <Text className="!ml-2">components</Text>
                </Flex>
                <Flex align="center" className={containerClass}>
                    <Box className={boxClassOne}></Box>
                    <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                </Flex>
                <Flex className="ml-9">
                    <Flex direction="column" className="h-auto">
                        <Box className={boxClassTwo}></Box>
                        <Box className={boxClassThree}></Box>
                    </Flex>
                    <Box className={boxClassFour}></Box>
                    <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                </Flex>
                <Flex align="center">
                    <Box className={boxClassOne}></Box>
                    <Text className="!ml-2">components</Text>
                </Flex>
                <Flex align="center" className={containerClass}>
                    <Box className={boxClassOne}></Box>
                    <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                </Flex>
                <Flex className="ml-9">
                    <Flex direction="column" className="h-auto">
                        <Box className={boxClassTwo}></Box>
                        <Box className={boxClassThree}></Box>
                    </Flex>
                    <Box className={boxClassFour}></Box>
                    <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                </Flex>
                <Flex align="center">
                    <Box className={boxClassOne}></Box>
                    <Text className="!ml-2">components</Text>
                </Flex>
                <Flex align="center" className={containerClass}>
                    <Box className={boxClassOne}></Box>
                    <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                </Flex>
                <Flex className="ml-9">
                    <Flex direction="column" className="h-auto">
                        <Box className={boxClassTwo}></Box>
                        <Box className={boxClassThree}></Box>
                    </Flex>
                    <Box className={boxClassFour}></Box>
                    <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                </Flex>
                <Flex align="center">
                    <Box className={boxClassOne}></Box>
                    <Text className="!ml-2">components</Text>
                </Flex>
                <Flex align="center" className={containerClass}>
                    <Box className={boxClassOne}></Box>
                    <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                </Flex>
                <Flex className="ml-9">
                    <Flex direction="column" className="h-auto">
                        <Box className={boxClassTwo}></Box>
                        <Box className={boxClassThree}></Box>
                    </Flex>
                    <Box className={boxClassFour}></Box>
                    <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                </Flex>
                <Flex align="center">
                    <Box className={boxClassOne}></Box>
                    <Text className="!ml-2">components</Text>
                </Flex>
                <Flex align="center" className={containerClass}>
                    <Box className={boxClassOne}></Box>
                    <Text className="!ml-2">Lorem ipsum, dolor sit amet.</Text>
                </Flex>
                <Flex className="ml-9">
                    <Flex direction="column" className="h-auto">
                        <Box className={boxClassTwo}></Box>
                        <Box className={boxClassThree}></Box>
                    </Flex>
                    <Box className={boxClassFour}></Box>
                    <Text className="!ml-2">Lorem ipsum dolor sit amet.</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Index;
