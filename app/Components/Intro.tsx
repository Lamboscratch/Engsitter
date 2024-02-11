import { Flex, Heading, Text } from "@radix-ui/themes";

const Intro = () => {
    return (
        <Flex className="my-24" direction="column" align="center" justify="center" gap="4">
            <Heading as="h1" size="9" align="center">
                Welcome to{" "}
                <Text className="text-orangeSite" as="span">
                    Dev
                </Text>
                sitter
            </Heading>
            <Text as="p" size="6" align="center" weight="medium">
                Make your learning path a beautiful journey!
            </Text>
        </Flex>
    );
};

export default Intro;
