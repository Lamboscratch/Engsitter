import { Flex, Heading, Text } from "@radix-ui/themes";
import ContainerApp from "./Components/ContainerApp";

const NotFoundPage = () => {
    return (
        <ContainerApp>
            <Flex direction="column" align="center">
                <Heading className="pt-48" as="h1" size="9">
                    404
                </Heading>
                <Heading className="pt-24" as="h2">
                    Page not found
                </Heading>
                <Text className="pt-6 max-w-prose text-center" as="p">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </Text>
            </Flex>
        </ContainerApp>
    );
};

export default NotFoundPage;
