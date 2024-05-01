import { Flex } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
    name: string;
    link: string;
    type: string;
}

export default function GoToLink({ name, link, type }: Props) {
    return (
        <Flex className="my-5" align="end" justify={type === "posts" ? "end" : "center"}>
            <Link className="flex text-base font-semibold items-center hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4" href={link}>
                {name} {type === "posts" ? "➝" : "⭡"}
            </Link>
        </Flex>
    );
}
