"use client";

import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContainerApp from "./ContainerApp";
import DarkModeButton from "./DarkModeButton";
import ImageTheme from "./ImageTheme";
import Search from "./Search";

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

export default function NavBar() {
    const currentPath = usePathname();

    const links: Links[] = [
        { name: "Home", path: "/" },
        { name: "Posts", path: "/Posts" },
        { name: "Tips", path: "/Tips" },
    ];

    return (
        <nav className="sticky top-0 z-20 backdrop-blur-sm bg-whitePrimary dark:bg-blackPrimary mb-auto">
            <ContainerApp>
                <Flex className="py-4 min-h-16 border-solid border-gray-200 border-b dark:border-zinc-700">
                    <Link className="flex items-center mr-auto" href="/">
                        <ImageTheme />
                        <p className="font-semibold text-2xl ml-4 initial:ml-3.5 leading-6">Engsitter</p>
                    </Link>
                    <ul className="flex space-x-6 text-xl mt-0.5 initial:hidden sm:flex sm:mr-0">
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
                    <Search style="ml-6" />
                    <svg className="pt-1 w-[1.65rem] h-[1.65rem]" xmlns="http://www.w3.org/2000/svg" strokeWidth="0" stroke="currentColor" fill="none" viewBox="0 0 1 31">
                        <rect className="!fill-gray-200 dark:!fill-zinc-700" fillRule="evenodd" clipRule="evenodd" fill="currentColor" width="1" height="31" />
                    </svg>
                    <DarkModeButton />
                </Flex>
            </ContainerApp>
        </nav>
    );
}
