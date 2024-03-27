import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface Props {
    name: string;
    link: string;
}

export default function GoToLink({ name, link }: Props) {
    return (
        <Flex className="my-6" align="end" justify="end">
            <Link className="flex text-xl items-center p-3 rounded-lg border border-solid border-gray-200 dark:border-zinc-700 hover:bg-orangeSite dark:hover:text-zinc-700 hover:transition-colors" href={link}>
                {name}
                <FaArrowRight className="ml-2.5"></FaArrowRight>
            </Link>
        </Flex>
    );
}
