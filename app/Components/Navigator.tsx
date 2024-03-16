"use client";

import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";

function capitalizeFirstLetter(text: string) {
    text = text.replaceAll("-", " ");
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function calculatePath(pathsArray: string[], index: number) {
    let calculatedPath = "/";
    for (let i = 0; i <= index; i++) {
        calculatedPath = calculatedPath + pathsArray[i] + "/";
    }
    return calculatedPath;
}

export default function Navigator() {
    const currentPath = usePathname();
    const paths = currentPath.slice(1).split("/");

    return (
        <Flex className="initial:pb-4 sm:pb-5 border-solid border-gray-200 border-b dark:border-zinc-700 initial:!hidden sm:!flex">
            {paths.map((value, index) => (
                <Flex className="mr-1.5" align="center" key={value}>
                    <Link className="!mr-1.5 text-sm hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4" href={calculatePath(paths, index)}>
                        {capitalizeFirstLetter(value)}
                    </Link>
                    {index === paths.length - 1 ? null : <MdKeyboardArrowRight />}
                </Flex>
            ))}
        </Flex>
    );
}
