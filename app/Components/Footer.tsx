import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { PiFacebookLogo, PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";
import ContainerApp from "./ContainerApp";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="mt-auto">
            <ContainerApp>
                <Flex className="py-4 border-solid border-gray-200 border-t dark:border-zinc-800" justify="between">
                    <Text className="flex items-center" as="p">
                        &copy; {currentYear} Engsitter
                    </Text>
                    <Flex align="center" justify="between" gap="2">
                        <Link className="rounded-sm outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite" href="https://www.facebook.com/" aria-label="Link to Facebook">
                            <PiFacebookLogo size={33}></PiFacebookLogo>
                        </Link>
                        <Link className="rounded-sm outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite" href="https://www.instagram.com/" aria-label="Link to Youtube">
                            <PiYoutubeLogo size={33}></PiYoutubeLogo>
                        </Link>
                        <Link className="rounded-sm outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite" href="https://www.youtube.com/" aria-label="Link to Instagram">
                            <PiInstagramLogo size={33}></PiInstagramLogo>
                        </Link>
                    </Flex>
                </Flex>
            </ContainerApp>
        </footer>
    );
};

export default Footer;
