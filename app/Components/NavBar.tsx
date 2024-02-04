"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
        { name: "Projects", path: "/projects" },
    ];

    console.log(currentPath);

    return (
        <nav className="flex space-x-7 items-center justify-between">
            <Link className="flex items-center" href="/">
                <ImageTheme />
                <p className="font-semibold text-2xl px-5">Devsitter</p>
            </Link>
            <div className="flex space-x-7 items-center justify-between">
                <ul className="flex space-x-7 text-xl">
                    {links.map((item) => (
                        <li key={item.path}>
                            <Link className={`${currentPath === item.path ? "font-semibold" : ""} hover:text-gray-600 transition-colors dark:hover:text-gray-300`} href={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <DarkModeButton />
            </div>
        </nav>
    );
};

export default NavBar;
