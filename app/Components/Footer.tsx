import { Flex, Text } from "@radix-ui/themes";
import { PiFacebookLogo, PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";
import ContainerApp from "./ContainerApp";

interface Props {
    style: string;
}

const Footer = ({ style }: Props) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={style}>
            <ContainerApp>
                <Flex justify="between">
                    <Text className="flex items-center" as="p">
                        &copy; {currentYear} Devsitter
                    </Text>
                    <Flex align="center" justify="between" gap="2">
                        <PiFacebookLogo size={33}></PiFacebookLogo>
                        <PiYoutubeLogo size={33}></PiYoutubeLogo>
                        <PiInstagramLogo size={33}></PiInstagramLogo>
                    </Flex>
                </Flex>
            </ContainerApp>
        </footer>
    );
};

export default Footer;
