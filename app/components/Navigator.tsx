"use client";

import coursesNameMap from "@/app/utilities/extractCourseName";
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

    const flexClass = "flex pb-5 pt-[1.125rem] border-solid border-gray-200 border-b dark:border-zinc-700";
    const linkClass = "!mr-1.5 text-sm font-medium hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4";

    return (
        <>
            <div className={`${flexClass} initial:!hidden sm:!flex`}>
                {paths.map((value, index) => (
                    <div className="flex items-center mr-1.5" key={value}>
                        <Link className={linkClass} href={calculatePath(paths, index)}>
                            {index === paths.length - 1 ? title : setCourseName(value)}
                        </Link>
                        {index === paths.length - 1 ? null : <MdKeyboardArrowRight />}
                    </div>
                ))}
            </div>
            <div className={`${flexClass} initial:!flex sm:!hidden`}>
                {initialPaths.map((value, index) => (
                    <div className="flex items-center mr-1.5" key={value}>
                        <Link className={linkClass} href={calculatePath(paths, index)}>
                            {setCourseName(value)}
                        </Link>
                        {index === paths.length - 2 ? null : <MdKeyboardArrowRight />}
                    </div>
                ))}
            </div>
        </>
    );
}
