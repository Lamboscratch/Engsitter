import ContainerApp from "@/app/components/ContainerApp";
import siteMetadata from "@/app/data/siteMetadata";
import { genPageMetadata } from "@/app/seo";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return genPageMetadata({
        title: `Page not found | ${siteMetadata.title}`,
        description: `Not found page`,
    });
}

const NotFoundPage = () => {
    return (
        <ContainerApp>
            <Flex className="notFoundHeight" direction="column" align="center" justify="center">
                <Heading className="!text-6xl" as="h1" size="9">
                    404
                </Heading>
                <Heading className="!text-2xl pt-16" as="h2">
                    Page not found
                </Heading>
                <Text className="!text-lg pt-6 max-w-prose text-center" as="p">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </Text>
            </Flex>
        </ContainerApp>
    );
};

export default NotFoundPage;
