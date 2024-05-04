"use client";

import ContainerApp from "@/app/components/ContainerApp";
import siteMetadata from "@/app/data/siteMetadata";
import { genPageMetadata } from "@/app/seo";
import { Flex, Heading } from "@radix-ui/themes";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return genPageMetadata({
        title: `Internal server errror | ${siteMetadata.title}`,
        description: `Internal server errore page`,
    });
}

const NotFoundPage = () => {
    return (
        <ContainerApp>
            <Flex className="notFoundHeight" direction="column" align="center" justify="center">
                <Heading className="!text-6xl" as="h1" size="9">
                    500
                </Heading>
                <Heading className="!text-2xl pt-16" as="h2">
                    Internal server error
                </Heading>
            </Flex>
        </ContainerApp>
    );
};

export default NotFoundPage;
