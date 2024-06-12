"use client";

import coursesNameMap from "@/app/utilities/extractCourseName";
import Link from "next/link";

interface Props {
    course: string;
    tagCounts: Record<string, number>;
    pathname: string;
    style?: string;
}

export default function RenderLink({ course, tagCounts, pathname, style }: Props) {
    const linkClassHover = "hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-8";
    const linkClassStatic = "underline decoration-solid decoration-orangeSite underline-offset-8";

    return (
        <Link className={`font-semibold pt-1 whitespace-nowrap ${style} ${pathname === "/posts/" + course ? linkClassStatic : linkClassHover}`} href={"/posts/" + course} aria-label={`Go to ${coursesNameMap.get(course)} course page`}>
            {`${coursesNameMap.get(course)} (${tagCounts[course]})`}
        </Link>
    );
}
