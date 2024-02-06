import { Flex, Heading, Text } from "@radix-ui/themes";
import ContainerApp from "./Components/ContainerApp";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

const NotFoundPage = () => {
    return (
        <ContainerApp>
            <Flex className="flex flex-col h-screen">
                <NavBar></NavBar>
                <main className="mt-auto mb-auto">
                    <ContainerApp>
                        <Flex direction="column" align="center">
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
                </main>
                <Footer></Footer>
            </Flex>
        </ContainerApp>
    );
};

export default NotFoundPage;
