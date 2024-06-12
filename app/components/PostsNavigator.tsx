"use client";

import RenderLink from "@/app/components/RenderLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    tagCounts: Record<string, number>;
}

export default function PostsNavigator({ tagCounts }: Props) {
    const pathname = usePathname();

    return (
        <div className="flex flex-col items-center justify-center my-16">
            <h1 className="text-[2.5rem] font-bold pb-1 text-center leading-10">
                <Link className="hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4" href={"/posts"} aria-label="Go to posts page">
                    {"All Posts"}
                </Link>
            </h1>
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
            <ul className="initial:grid sm:hidden gridTemplateAreas grid-rows-rows initial:grid-cols-cols w-full">
                <li className="gridTopLeftCorner flex flex-col w-full self-end text-lg font-medium border-r-[2px] border-solid border-orangeSite">
                    <div className="pl-7 flex flex-col w-full">
                        <div className="w-full h-1/2"></div>
                        <div className="w-full h-1/2 border-t-[2px] border-solid border-orangeSite"></div>
                    </div>
                    <div className="pl-7 h-[1rem] w-[2px] border-r-[2px] border-solid border-orangeSite"></div>
                </li>
                <li className="gridTopLCorner flex flex-row w-full"></li>
                <li className="gridTopCenter w-[2px] h-full bg-orangeSite"></li>
                <li className="gridTopRCorner flex flex-row w-full"></li>
                <li className="gridTopRightCorner flex flex-col w-full self-end text-lg font-medium border-l-[2px] border-solid border-orangeSite">
                    <div className="pr-7 flex flex-col w-full">
                        <div className="w-full h-1/2"></div>
                        <div className="w-full h-1/2 border-t-[2px] border-solid border-orangeSite"></div>
                    </div>
                    <div className="ml-auto pr-7 h-[1rem] w-[2px] border-l-[2px] border-solid border-orangeSite"></div>
                </li>
                <li className="gridFirstRowL text-lg border-r-[2px] border-solid border-orangeSite">
                    <RenderLink course="ccna" tagCounts={tagCounts} pathname={pathname} />
                </li>
                <li className="gridFirstRowLL border-b-[1px] border-solid border-orangeSite"></li>
                <li className="gridFirstRow w-[2px] h-full bg-orangeSite"></li>
                <li className="gridFirstRowRR border-b-[1px] border-solid border-orangeSite"></li>
                <li className="gridFirstRowR text-lg text-end border-l-[2px] border-solid border-orangeSite">
                    <RenderLink course="ceh" tagCounts={tagCounts} pathname={pathname} />
                </li>
                <li className="gridBottomLeftCorner flex flex-col w-full text-lg font-medium">
                    <div className="h-[3rem] w-full border-r-[2px] border-solid border-orangeSite"></div>
                    <div className="pl-7 flex flex-col w-full">
                        <div className="w-full h-1/2 border-b-[2px] border-solid border-orangeSite"></div>
                        <div className="w-full h-1/2"></div>
                    </div>
                    <div className="pl-7 h-[1rem] w-[2px] border-r-[2px] border-solid border-orangeSite"></div>
                </li>
                <li className="gridBottomLCorner flex flex-row w-full">
                    <div className="flex flex-col w-full">
                        <div className="w-full h-1/2 border-t-[1px] border-solid border-orangeSite"></div>
                        <div className="w-full h-1/2"></div>
                    </div>
                </li>
                <li className="gridBottomCenter self-start w-[2px] h-[1px] bg-orangeSite"></li>
                <li className="gridBottomRCorner flex flex-row w-full">
                    <div className="flex flex-col w-full">
                        <div className="w-full h-1/2 border-t-[1px] border-solid border-orangeSite"></div>
                        <div className="w-full h-1/2"></div>
                    </div>
                </li>
                <li className="gridBottomRightCorner flex flex-col w-full text-lg font-medium">
                    <div className="h-[3rem] w-full border-l-[2px] border-solid border-orangeSite"></div>
                    <div className="pr-7 flex flex-col w-full">
                        <div className="w-full h-1/2 border-b-[2px] border-solid border-orangeSite"></div>
                        <div className="w-full h-1/2"></div>
                    </div>
                    <div className="ml-auto pr-7 h-[1rem] w-[2px] border-l-[2px] border-solid border-orangeSite"></div>
                </li>
                <li className="gridSecondRowL text-lg">
                    <RenderLink course="python" tagCounts={tagCounts} pathname={pathname} />
                </li>
                <li className="gridSecondRowL "></li>
                <li className="gridSecondRow"></li>
                <li className="gridSecondRowR"></li>
                <li className="gridSecondRowR text-lg text-end">
                    <RenderLink course="welcome" tagCounts={tagCounts} pathname={pathname} />
                </li>
            </ul>
        </div>
    );
}
