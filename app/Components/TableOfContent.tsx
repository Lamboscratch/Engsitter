import type { Header } from "@/app/components/Index";
import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
    header: Header;
    path: string;
    index: number;
    resolvedHeaders: Header[];
}

export default function TableOfContent({ header, path, index, resolvedHeaders }: Props) {
    const linkClass = "text-lg hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4";
    const containerClass = "border-l-2 border-solid border-orangeSite ml-9";
    const boxClassOne = "h-[2px] pl-[15px] border border-solid border-orangeSite";
    const boxClassTwo = "w-[2px] border border-solid border-orangeSite self-start h-1/2";
    const boxClassThree = "w-[2px] border-b border-solid border-orangeSite";
    const boxClassFour = "h-[2px] pl-[15px] border border-solid border-orangeSite self-center";

    if (header.depth === 2) {
        return (
            <Flex align="center">
                <Box className={boxClassOne} />
                <Flex className="ml-2">
                    <Link className={linkClass} href={`${header.url}`} aria-label={`Go to ${header.value} section`}>
                        {header.value}
                    </Link>
                </Flex>
            </Flex>
        );
    } else if (header.depth === 3 && resolvedHeaders[index + 1].depth === 3) {
        return (
            <Flex align="center" className={containerClass}>
                <Box className={boxClassOne} />
                <Flex className="ml-2">
                    <Link className={linkClass} href={`${header.url}`} aria-label={`Go to ${header.value} section`}>
                        {header.value}
                    </Link>
                </Flex>
            </Flex>
        );
    } else if (header.depth === 3 && resolvedHeaders[index + 1].depth !== 3) {
        return (
            <Flex className="ml-9">
                <Flex direction="column" className="h-auto">
                    <Box className={boxClassTwo}></Box>
                    <Box className={boxClassThree}></Box>
                </Flex>
                <Box className={boxClassFour}></Box>
                <Flex className="!ml-2">
                    <Link className={linkClass} href={`${header.url}`} aria-label={`Go to ${header.value} section`}>
                        {header.value}
                    </Link>
                </Flex>
            </Flex>
        );
    }

    return <div></div>;
}
