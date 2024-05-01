"use client";

import RenderLink from "@/app/components/RenderLink";
import { Heading } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    tagCounts: Record<string, number>;
}

export default function PostsNavigator({ tagCounts }: Props) {
    const pathname = usePathname();

    return (
        <div className="flex flex-col items-center justify-center my-16">
            <Heading className="!text-[2.5rem] pb-1 text-center !leading-10" as="h1" size="8" weight="bold">
                <Link className="hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4" href={"/posts"} aria-label="Go to posts page">
                    {"All Posts"}
                </Link>
            </Heading>
            <div className="initial:hidden sm:block mt-[2px] h-7 w-[2px] bg-orangeSite"></div>
            <ul className="initial:hidden sm:flex flex-row w-full justify-between">
                <li className="flex flex-col items-center text-lg font-medium">
                    <div className="h-[2px] halfWidth self-end bg-orangeSite"></div>
                    <div className="h-5 w-[2px] bg-orangeSite"></div>
                    <RenderLink course="ccna" tagCounts={tagCounts} pathname={pathname} />
                </li>
                <li className="w-full border-t-[2px] border-solid border-orangeSite"></li>
                <li className="flex flex-col items-center text-lg font-medium">
                    <div className="h-[2px] w-full bg-orangeSite"></div>
                    <div className="h-5 w-[2px] bg-orangeSite"></div>
                    <RenderLink course="ceh" tagCounts={tagCounts} pathname={pathname} />
                </li>
                <li className="w-full border-t-[2px] border-solid border-orangeSite"></li>
                <li className="flex flex-col items-center text-lg font-medium">
                    <div className="h-[2px] w-full bg-orangeSite"></div>
                    <div className="h-5 w-[2px] bg-orangeSite"></div>
                    <RenderLink course="python" tagCounts={tagCounts} pathname={pathname} />
                </li>
                <li className="w-full border-t-[2px] border-solid border-orangeSite"></li>
                <li className="flex flex-col items-center text-lg font-medium">
                    <div className="h-[2px] halfWidth self-start bg-orangeSite"></div>
                    <div className="h-5 w-[2px] bg-orangeSite"></div>
                    <RenderLink course="welcome" tagCounts={tagCounts} pathname={pathname} />
                </li>
            </ul>
            <ul className="initial:grid sm:hidden grid-rows-rows initial:grid-cols-colsSmall xs:grid-cols-colsBig w-full">
                <li className="flex flex-row w-full self-end py-1 text-lg font-medium">
                    <RenderLink course="ccna" tagCounts={tagCounts} pathname={pathname} />
                    <div className="pl-3 flex flex-col w-full">
                        <div className="w-full h-1/2"></div>
                        <div className="w-full h-1/2 border-t-[2px] border-solid border-orangeSite"></div>
                    </div>
                </li>
                <li className="flex flex-row w-full">
                    <div className="flex flex-col w-full">
                        <div className="w-full h-3/4"></div>
                        <div className="w-full h-1/4 border-b-[1px] border-l-[2px] border-solid border-orangeSite"></div>
                    </div>
                </li>
                <li className="w-[2px] h-full bg-orangeSite"></li>
                <li className="flex flex-row w-full">
                    <div className="flex flex-col w-full">
                        <div className="w-full h-3/4"></div>
                        <div className="w-full h-1/4 border-b-[1px] border-r-[2px] border-solid border-orangeSite"></div>
                    </div>
                </li>
                <li className="flex flex-row w-full self-end py-1 text-lg font-medium">
                    <div className="pr-3 flex flex-col w-full">
                        <div className="w-full h-1/2"></div>
                        <div className="w-full h-1/2 border-t-[2px] border-solid border-orangeSite"></div>
                    </div>
                    <RenderLink course="ceh" tagCounts={tagCounts} pathname={pathname} />
                </li>
                <li className="flex flex-row w-full py-1 text-lg font-medium">
                    <RenderLink course="python" tagCounts={tagCounts} pathname={pathname} />
                    <div className="pl-3 flex flex-col w-full">
                        <div className="w-full h-1/2 border-b-[2px] border-solid border-orangeSite"></div>
                        <div className="w-full h-1/2"></div>
                    </div>
                </li>
                <li className="flex flex-row w-full">
                    <div className="flex flex-col w-full">
                        <div className="w-full h-1/2 border-t-[1px] border-l-[2px] border-solid border-orangeSite"></div>
                        <div className="w-full h-1/2"></div>
                    </div>
                </li>
                <li className="self-start w-[2px] h-[1px] bg-orangeSite"></li>
                <li className="flex flex-row w-full">
                    <div className="flex flex-col w-full">
                        <div className="w-full h-1/2 border-t-[1px] border-r-[2px] border-solid border-orangeSite"></div>
                        <div className="w-full h-1/2"></div>
                    </div>
                </li>
                <li className="flex flex-row w-full py-1 text-lg font-medium">
                    <div className="pr-3 flex flex-col w-full">
                        <div className="w-full h-1/2 border-b-[2px] border-solid border-orangeSite"></div>
                        <div className="w-full h-1/2"></div>
                    </div>
                    <RenderLink course="welcome" tagCounts={tagCounts} pathname={pathname} />
                </li>
            </ul>
        </div>
    );
}
