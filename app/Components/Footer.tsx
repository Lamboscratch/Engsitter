import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { PiFacebookLogo, PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";
import ContainerApp from "./ContainerApp";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <ContainerApp>
                <Flex className="py-7 border-solid border-gray-200 border-t dark:border-zinc-800" justify="between">
                    <Text className="flex items-center" as="p">
                        &copy; {currentYear} Devsitter
                    </Text>
                    <Flex align="center" justify="between" gap="2">
                        <Link href="https://www.facebook.com/">
                            <PiFacebookLogo size={33}></PiFacebookLogo>
                        </Link>
                        <Link href="https://www.instagram.com/">
                            <PiYoutubeLogo size={33}></PiYoutubeLogo>
                        </Link>
                        <Link href="https://www.youtube.com/">
                            <PiInstagramLogo size={33}></PiInstagramLogo>
                        </Link>
                    </Flex>
                </Flex>
            </ContainerApp>
        </footer>
    );
};

export default Footer;
