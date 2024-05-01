"use client";

import ContainerApp from "@/app/components/ContainerApp";
import DarkModeButton from "@/app/components/DarkModeButton";
import ImageTheme from "@/app/components/ImageTheme";
import Search from "@/app/components/Search";
import checkLink from "@/app/utilities/checkLink";
import links from "@/app/utilities/extractPathName";
import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";
import Separator from "./Separator";

export default function NavBar() {
    const currentPath = usePathname();

    return (
        <nav className={`sticky top-0 z-20 backdrop-blur-sm bg-whitePrimary dark:bg-blackPrimary ${currentPath.startsWith("/resources") ? "mb-auto" : "mb-0"}`}>
            <ContainerApp>
                <Flex className="py-4 min-h-16 border-solid border-gray-200 border-b dark:border-zinc-700">
                    <Link className="flex items-center mr-auto" href="/" aria-label="Go to home page">
                        <ImageTheme style="w-6 h-6" />
                        <p className="font-semibold text-2xl ml-4 initial:ml-3.5 leading-6">Engsitter</p>
                    </Link>
                    <ul className="flex space-x-6 text-xl mt-0.5 initial:hidden sm:flex sm:mr-0">
                        {links.map((item) => (
                            <li key={item.path}>
                                <Link
                                    className={`${checkLink(currentPath!, item.path) ? "font-semibold underline decoration-solid decoration-orangeSite underline-offset-4" : ""} rounded-sm outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite dark:hover:text-gray-300`}
                                    href={item.path}
                                    aria-label={`Go to ${item.name} page`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Search style="initial:ml-0 sm:ml-6 initial:mr-3 sm:mr-0" />
                    <Separator style="initial:hidden sm:block" />
                    <DarkModeButton />
                    <Separator style="initial:block sm:hidden" />
                    <HamburgerMenu />
                </Flex>
            </ContainerApp>
        </nav>
    );
}
