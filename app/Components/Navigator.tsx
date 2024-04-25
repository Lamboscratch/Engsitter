"use client";

import coursesNameMap from "@/app/utilities/extractCourseName";
import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
    title: string;
}

function setCourseName(text: string) {
    return coursesNameMap.get(text);
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

    const flexClass = "pb-5 pt-[1.125rem] border-solid border-gray-200 border-b dark:border-zinc-700";
    const linkClass = "!mr-1.5 text-sm font-medium hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4";

    return (
        <>
            <Flex className={`${flexClass} initial:!hidden sm:!flex`}>
                {paths.map((value, index) => (
                    <Flex className="mr-1.5" align="center" key={value}>
                        <Link className={linkClass} href={calculatePath(paths, index)}>
                            {index === paths.length - 1 ? title : setCourseName(value)}
                        </Link>
                        {index === paths.length - 1 ? null : <MdKeyboardArrowRight />}
                    </Flex>
                ))}
            </Flex>
            <Flex className={`${flexClass} initial:!flex sm:!hidden`}>
                {initialPaths.map((value, index) => (
                    <Flex className="mr-1.5" align="center" key={value}>
                        <Link className={linkClass} href={calculatePath(paths, index)}>
                            {setCourseName(value)}
                        </Link>
                        {index === paths.length - 2 ? null : <MdKeyboardArrowRight />}
                    </Flex>
                ))}
            </Flex>
        </>
    );
}
