"use client";

import { Root } from "@radix-ui/react-separator";
import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContainerApp from "./ContainerApp";
import DarkModeButton from "./DarkModeButton";
import DropDownMenu from "./DropDownMenu";
import ImageTheme from "./ImageTheme";

interface Links {
    name: string;
    path: string;
}

function checkLink(currentPath: string, itemPath: string) {
    if (currentPath === "/" && itemPath === "/") {
        return true;
    }
    if (currentPath.startsWith("/posts") && itemPath.startsWith("/posts")) {
        return true;
    }
    if (currentPath.startsWith("/tips") && itemPath.startsWith("/tips")) {
        return true;
    }
    return false;
}

const NavBar = () => {
    const currentPath = usePathname();

    const links: Links[] = [
        { name: "Home", path: "/" },
        { name: "Posts", path: "/posts" },
        { name: "Tips", path: "/tips" },
    ];

    return (
        <nav className="sticky top-0 z-20 backdrop-blur-sm bg-whitePrimary dark:bg-blackPrimary mb-auto">
            <ContainerApp>
                <Flex className="py-7 border-solid border-gray-200 border-b dark:border-zinc-800" justify="between">
                    <Link className="flex items-center rounded-sm outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite" href="/">
                        <ImageTheme />
                        <p className="font-semibold text-2xl ml-4 initial:ml-3.5">Devsitter</p>
                    </Link>
                    <Flex className="flex space-x-6 items-center justify-between initial:space-x-3.5 sm:space-x-6">
                        <ul className="flex space-x-7 text-xl initial:hidden sm:flex">
                            {links.map((item) => (
                                <li key={item.path}>
                                    <Link className={`${checkLink(currentPath, item.path) ? "font-semibold" : ""} hover:text-gray-600 transition-colors rounded-sm outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite dark:hover:text-gray-300`} href={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <DropDownMenu></DropDownMenu>
                        <Root className="initial:block sm:hidden bg-gray-200 dark:bg-zinc-800 h-full data-[orientation=vertical]:w-px mx-[45px]" decorative orientation="vertical" />
                        <DarkModeButton />
                    </Flex>
                </Flex>
            </ContainerApp>
        </nav>
    );
};

export default NavBar;
