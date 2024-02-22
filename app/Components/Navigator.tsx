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

const Navigator = () => {
    const currentPath = usePathname();
    const paths = currentPath.slice(1).split("/");

    return (
        <Flex>
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
};

export default Navigator;
