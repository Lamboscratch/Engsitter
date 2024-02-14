import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import ContainerApp from "../Components/ContainerApp";
import HeadingPrimary from "../Components/HeadingPrimary";

const index = () => {
    return (
        <ContainerApp>
            <HeadingPrimary></HeadingPrimary>
            <Flex gap="3">
                <Flex direction="column">
                    <Heading as="h2" size="7">
                        Python
                    </Heading>
                    <Flex className="border-l-2 border-solid border-orangeSite text-xl pt-2 mt-2" direction="column">
                        <Flex align="center">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className="border-l-2 border-solid border-orangeSite ml-9">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, error.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className="w-[2px] border border-solid border-orangeSite self-start h-1/2"></Box>
                                <Box className="w-[2px] border-b border-solid border-orangeSite"></Box>
                            </Flex>
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite self-center"></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nam?</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex direction="column">
                    <Heading as="h2" size="7">
                        Javascript
                    </Heading>
                    <Flex className="border-l-2 border-solid border-orangeSite text-xl pt-2 mt-2" direction="column">
                        <Flex align="center">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">components</Text>
                        </Flex>
                        <Flex align="center" className="border-l-2 border-solid border-orangeSite ml-9">
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite"></Box>
                            <Text className="!ml-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, error.</Text>
                        </Flex>
                        <Flex className="ml-9">
                            <Flex direction="column" className="h-auto">
                                <Box className="w-[2px] border border-solid border-orangeSite self-start h-1/2"></Box>
                                <Box className="w-[2px] border-b border-solid border-orangeSite"></Box>
                            </Flex>
                            <Box className="h-[2px] pl-[15px] border border-solid border-orangeSite self-center"></Box>
                            <Text className="!ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nam?</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </ContainerApp>
    );
};

export default index;
