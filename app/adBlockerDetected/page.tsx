import { Flex, Heading, Text } from "@radix-ui/themes";
import ContainerApp from "../Components/ContainerApp";

const page = () => {
    return (
        <ContainerApp>
            <Flex className="notFoundHeight" direction="column" align="center" justify="center">
                <Heading as="h1" size="8">
                    AdBlocker Detected
                </Heading>
                <Text className="pt-6 max-w-prose text-center" size="4" as="p">
                    It appears that you are using an ad-blocking extension in your browser. Please disable it and reload the page.
                </Text>
            </Flex>
        </ContainerApp>
    );
};

export default page;
