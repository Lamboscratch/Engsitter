import ImageTheme from "@/app/components/ImageTheme";
import { Flex, Heading, Text } from "@radix-ui/themes";

export default function Intro() {
    return (
        <Flex className="my-24" direction="column" align="center" justify="center" gap="4">
            <ImageTheme style="w-20 h-20 mb-6" />
            <Heading className="!text-6xl" as="h1" align="center">
                <Text className="text-orangeSite" as="span">
                    Eng
                </Text>
                sitter
            </Heading>
            <Text className="!text-2xl mt-3" as="p" align="center" weight="medium">
                The gateway to Networking and Cybersecurity insights
            </Text>
        </Flex>
    );
}
