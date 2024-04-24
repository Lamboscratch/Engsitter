import { Flex, Heading, Text } from "@radix-ui/themes";

export default function Intro() {
    return (
        <Flex className="my-24" direction="column" align="center" justify="center" gap="4">
            <Heading className="!text-6xl" as="h1" align="center">
                Welcome to{" "}
                <Text className="text-orangeSite" as="span">
                    Eng
                </Text>
                sitter
            </Heading>
            <Text className="!text-2xl" as="p" align="center" weight="medium">
                Make your learning path a beautiful journey!
            </Text>
        </Flex>
    );
}
