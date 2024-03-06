import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { PiFacebookLogo, PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";
import ContainerApp from "./ContainerApp";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const linkClass = "rounded-sm outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite";
    const logoSize = 30;

    return (
        <footer className="mt-auto">
            <ContainerApp>
                <Flex className="py-4 min-h-16 border-solid border-gray-200 border-t dark:border-zinc-800" justify="between">
                    <Text className="flex items-center" as="p">
                        &copy; {currentYear} Engsitter
                    </Text>
                    <Flex align="center" justify="between" gap="2">
                        <Link className={linkClass} href="https://www.facebook.com/" aria-label="Link to Facebook">
                            <PiFacebookLogo size={logoSize}></PiFacebookLogo>
                        </Link>
                        <Link className={linkClass} href="https://www.instagram.com/" aria-label="Link to Youtube">
                            <PiYoutubeLogo size={logoSize}></PiYoutubeLogo>
                        </Link>
                        <Link className={linkClass} href="https://www.youtube.com/" aria-label="Link to Instagram">
                            <PiInstagramLogo size={logoSize}></PiInstagramLogo>
                        </Link>
                    </Flex>
                </Flex>
            </ContainerApp>
        </footer>
    );
}
