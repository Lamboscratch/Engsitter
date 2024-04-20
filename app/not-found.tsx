import ContainerApp from "@/app/components/ContainerApp";
import { Flex, Heading, Text } from "@radix-ui/themes";

const NotFoundPage = () => {
    return (
        <ContainerApp>
            <Flex className="notFoundHeight" direction="column" align="center" justify="center">
                <Heading as="h1" size="9">
                    404
                </Heading>
                <Heading className="pt-16" as="h2">
                    Page not found
                </Heading>
                <Text className="pt-6 max-w-prose text-center" size="4" as="p">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </Text>
            </Flex>
        </ContainerApp>
    );
};

export default NotFoundPage;
