import ContainerApp from "@/app/components/ContainerApp";
import { genPageMetadata } from "@/app/seo";
import { Flex, Heading } from "@radix-ui/themes";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { page: string } }): Promise<Metadata> {
    return genPageMetadata({
        title: "Resources",
        description: "Useful resources to strengthen understanding",
    });
}

export default function Page() {
    return (
        <ContainerApp style="my-16">
            <Flex direction="column" align="center">
                <Heading className="!text-4xl text-center" as="h1">
                    Coming soon...
                </Heading>
            </Flex>
        </ContainerApp>
    );
}
