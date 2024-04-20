import ContainerApp from "@/app/components/ContainerApp";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { PiFacebookLogo, PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const linkClass = "rounded-sm outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite";

    return (
        <footer className="mt-auto">
            <ContainerApp>
                <Flex className="py-4 min-h-16 border-solid border-gray-200 border-t dark:border-zinc-700" justify="between">
                    <Text className="flex items-center !text-base" as="p">
                        &copy; {currentYear} Engsitter
                    </Text>
                    <Flex align="center" justify="between" gap="2">
                        <Link className={linkClass} href="https://www.facebook.com/" aria-label="Link to Facebook">
                            <PiFacebookLogo className="w-[1.65rem] h-[1.65rem]"></PiFacebookLogo>
                        </Link>
                        <Link className={linkClass} href="https://www.youtube.com/" aria-label="Link to Youtube">
                            <PiYoutubeLogo className="w-[1.65rem] h-[1.65rem]"></PiYoutubeLogo>
                        </Link>
                        <Link className={linkClass} href="https://www.instagram.com/" aria-label="Link to Instagram">
                            <PiInstagramLogo className="w-[1.65rem] h-[1.65rem]"></PiInstagramLogo>
                        </Link>
                    </Flex>
                </Flex>
            </ContainerApp>
        </footer>
    );
}
