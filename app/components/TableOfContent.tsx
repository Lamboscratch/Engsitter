import type { Header } from "@/app/components/Index";
import Link from "next/link";

interface Props {
    header: Header;
    index: number;
    resolvedHeaders: Header[];
}

export default function TableOfContent({ header, index, resolvedHeaders }: Props) {
    const linkClass = "text-lg hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4";
    const containerClass = "border-l-2 border-solid border-orangeSite ml-9";
    const boxClassOne = "h-[2px] pl-[15px] border border-solid border-orangeSite";
    const boxClassTwo = "w-[2px] border border-solid border-orangeSite self-start h-1/2";
    const boxClassThree = "w-[2px] border-b border-solid border-orangeSite";
    const boxClassFour = "h-[2px] pl-[15px] border border-solid border-orangeSite self-center";

    if (header.depth === 2) {
        return (
            <div className="flex items-center">
                <div className={boxClassOne} />
                <div className="flex ml-2">
                    <Link className={linkClass} href={`${header.url}`} aria-label={`Go to ${header.value} section`}>
                        {header.value}
                    </Link>
                </div>
            </div>
        );
    } else if (header.depth === 3 && resolvedHeaders[index + 1].depth === 3) {
        return (
            <div className={`flex items-center ${containerClass}`}>
                <div className={boxClassOne} />
                <div className="flex ml-2">
                    <Link className={linkClass} href={`${header.url}`} aria-label={`Go to ${header.value} section`}>
                        {header.value}
                    </Link>
                </div>
            </div>
        );
    } else if (header.depth === 3 && resolvedHeaders[index + 1].depth !== 3) {
        return (
            <div className="flex ml-9">
                <div className="flex flex-col h-auto">
                    <div className={boxClassTwo}></div>
                    <div className={boxClassThree}></div>
                </div>
                <div className={boxClassFour}></div>
                <div className="flex !ml-2">
                    <Link className={linkClass} href={`${header.url}`} aria-label={`Go to ${header.value} section`}>
                        {header.value}
                    </Link>
                </div>
            </div>
        );
    }

    return <div></div>;
}
