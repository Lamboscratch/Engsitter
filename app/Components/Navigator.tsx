"use client";

import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
    title: string;
}

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

export default function Navigator({ title }: Props) {
    const currentPath = usePathname();
    const paths = currentPath!.slice(1).split("/");
    const initialPaths = paths.slice(0, paths.length - 1);

    return (
        <>
            <Flex className="initial:pb-4 initial:pt-[0.875rem] sm:pb-5 sm:pt-[1.125rem] border-solid border-gray-200 border-b dark:border-zinc-700 initial:!hidden sm:!flex">
                {paths.map((value, index) => (
                    <Flex className="mr-1.5" align="center" key={value}>
                        <Link className="!mr-1.5 text-sm hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4" href={calculatePath(paths, index)}>
                            {index === paths.length - 1 ? title : capitalizeFirstLetter(value)}
                        </Link>
                        {index === paths.length - 1 ? null : <MdKeyboardArrowRight />}
                    </Flex>
                ))}
            </Flex>
            <Flex className="initial:pb-4 initial:pt-[0.875rem] sm:pb-5 sm:pt-[1.125rem] border-solid border-gray-200 border-b dark:border-zinc-700 initial:!flex sm:!hidden">
                {initialPaths.map((value, index) => (
                    <Flex className="mr-1.5" align="center" key={value}>
                        <Link className="!mr-1.5 text-sm hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4" href={calculatePath(paths, index)}>
                            {capitalizeFirstLetter(value)}
                        </Link>
                        {index === paths.length - 2 ? null : <MdKeyboardArrowRight />}
                    </Flex>
                ))}
            </Flex>
        </>
    );
}
