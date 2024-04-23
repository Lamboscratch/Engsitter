import ContainerApp from "@/app/components/ContainerApp";
import { genPageMetadata } from "@/app/seo";
import { Flex, Heading } from "@radix-ui/themes";

export const metadata = genPageMetadata({ title: "Tips | Engsitter" });

export default function Page() {
    return (
        <ContainerApp style="my-16">
            <Flex direction="column" align="center">
                <Heading className="text-center" as="h1" size="8">
                    Coming soon...
                </Heading>
            </Flex>
        </ContainerApp>
    );
}
