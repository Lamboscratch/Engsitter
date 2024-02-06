"use client";

import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDropdown } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import ContainerApp from "./ContainerApp";
import DarkModeButton from "./DarkModeButton";
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
        <nav>
            <ContainerApp>
                <Flex className="py-7 border-solid border-gray-200 border-b dark:border-zinc-800" justify="between">
                    <Link className="flex items-center" href="/">
                        <ImageTheme />
                        <p className="font-semibold text-2xl mx-4 xs:mx-3.5">Devsitter</p>
                    </Link>
                    <Flex className="flex space-x-6 items-center justify-between xs:space-x-0.5 md:space-x-6">
                        <ul className="flex space-x-7 text-xl xs:hidden md:flex">
                            {links.map((item) => (
                                <li key={item.path}>
                                    <Link className={`${currentPath === item.path ? "font-semibold" : ""} hover:text-gray-600 transition-colors dark:hover:text-gray-300`} href={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <IoIosArrowDropdown className="xs:blox md:hidden" size={29}></IoIosArrowDropdown>
                        <RxDividerVertical className="xs:blox md:hidden" color="rgb(229, 231, 235)" size={29}></RxDividerVertical>
                        <DarkModeButton />
                    </Flex>
                </Flex>
            </ContainerApp>
        </nav>
    );
};

export default NavBar;
