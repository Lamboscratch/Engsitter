import { Flex, Heading, Text } from "@radix-ui/themes";
import ContainerApp from "@/app/Components/ContainerApp";

const page = () => {
    return (
        <ContainerApp>
            <ContainerApp style="my-16">
                <Flex direction="column" align="center">
                    <Heading className="text-center" as="h1" size="8">
                        Coming soon...
                    </Heading>
                </Flex>
            </ContainerApp>
        </ContainerApp>
    );
};

export default page;
