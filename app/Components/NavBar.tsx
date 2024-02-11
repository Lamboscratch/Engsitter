"use client";

import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxDividerVertical } from "react-icons/rx";
import ContainerApp from "./ContainerApp";
import DarkModeButton from "./DarkModeButton";
import DropDownMenu from "./DropDownMenu";
import ImageTheme from "./ImageTheme";

interface Links {
    name: string;
    path: string;
}

const NavBar = () => {
    const currentPath = usePathname();

    const links: Links[] = [
        { name: "Home", path: "/" },
        { name: "Posts", path: "/posts" },
        { name: "Snippets", path: "/snippets" },
    ];

    return (
        <nav className="mb-auto">
            <ContainerApp>
                <Flex className="py-7 border-solid border-gray-200 border-b dark:border-zinc-800" justify="between">
                    <Link className="flex items-center rounded-sm outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite" href="/">
                        <ImageTheme />
                        <p className="font-semibold text-2xl ml-4 initial:ml-3.5">Devsitter</p>
                    </Link>
                    <Flex className="flex space-x-6 items-center justify-between initial:space-x-0.5 sm:space-x-6">
                        <ul className="flex space-x-7 text-xl initial:hidden sm:flex">
                            {links.map((item) => (
                                <li key={item.path}>
                                    <Link className={`${currentPath === item.path ? "font-semibold" : ""} hover:text-gray-600 transition-colors rounded-sm outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite dark:hover:text-gray-300`} href={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <DropDownMenu></DropDownMenu>
                        <RxDividerVertical className="initial:block sm:hidden" color="rgb(229, 231, 235)" size={29}></RxDividerVertical>
                        <DarkModeButton />
                    </Flex>
                </Flex>
            </ContainerApp>
        </nav>
    );
};

export default NavBar;
