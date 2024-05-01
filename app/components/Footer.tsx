import ContainerApp from "@/app/components/ContainerApp";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { PiFacebookLogo, PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto">
            <ContainerApp>
                <Flex className="py-4 min-h-16 border-solid border-gray-200 border-t dark:border-zinc-700" justify="between">
                    <Text className="flex items-center !text-base" as="p">
                        &copy; {currentYear} Engsitter
                    </Text>
                    <Flex align="center" justify="between" gap="2">
                        <Link className="!text-base hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4" href="mailto:engsitter@gmail.com" aria-label="Link to email address">
                            engsitter@gmail.com
                        </Link>
                    </Flex>
                </Flex>
            </ContainerApp>
        </footer>
    );
}
