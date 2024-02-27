"use client";

import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContainerApp from "./ContainerApp";
import DarkModeButton from "./DarkModeButton";
import ImageTheme from "./ImageTheme";

interface Links {
    name: string;
    path: string;
}

function checkLink(currentPath: string, itemPath: string) {
    if (currentPath === "/" && itemPath === "/") {
        return true;
    }
    if (currentPath.startsWith("/Posts") && itemPath.startsWith("/Posts")) {
        return true;
    }
    if (currentPath.startsWith("/Tips") && itemPath.startsWith("/Tips")) {
        return true;
    }
    return false;
}

const NavBar = () => {
    const currentPath = usePathname();

    const links: Links[] = [
        { name: "Home", path: "/" },
        { name: "Posts", path: "/Posts" },
        { name: "Tips", path: "/Tips" },
    ];

    return (
        <nav className="sticky top-0 z-20 backdrop-blur-sm bg-whitePrimary dark:bg-blackPrimary mb-auto">
            <ContainerApp>
                <Flex className="py-4 min-h-16 border-solid border-gray-200 border-b dark:border-zinc-800">
                    <Link className="flex items-center initial:mr-0 sm:mr-auto" href="/">
                        <ImageTheme />
                        <p className="font-semibold text-2xl ml-4 initial:ml-3.5 leading-6 initial:hidden sm:block">Engsitter</p>
                    </Link>
                    <ul className="flex space-x-6 text-xl mt-0.5 initial:mx-auto sm:mr-0">
                        {links.map((item) => (
                            <li key={item.path}>
                                <Link
                                    className={`${checkLink(currentPath, item.path) ? "font-semibold underline decoration-solid decoration-orangeSite underline-offset-4" : ""} rounded-sm outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite dark:hover:text-gray-300`}
                                    href={item.path}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <DarkModeButton />
                </Flex>
            </ContainerApp>
        </nav>
    );
};

export default NavBar;
