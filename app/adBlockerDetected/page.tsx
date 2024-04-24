import ContainerApp from "@/app/components/ContainerApp";
import siteMetadata from "@/app/data/siteMetadata";
import { genPageMetadata } from "@/app/seo";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return genPageMetadata({
        title: `AdBlocker detected | ${siteMetadata.title}`,
        description: `AdBlocker detected`,
    });
}

export default function Page() {
    return (
        <ContainerApp>
            <Flex className="notFoundHeight" direction="column" align="center" justify="center">
                <Heading className="!text-4xl" as="h1">
                    AdBlocker detected
                </Heading>
                <Text className="!text-lg pt-6 max-w-prose text-center" as="p">
                    It appears that you are using an ad-blocking extension in your browser. Please disable it and reload the page.
                </Text>
            </Flex>
        </ContainerApp>
    );
}
