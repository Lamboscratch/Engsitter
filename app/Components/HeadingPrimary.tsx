import { Heading } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
    styles?: string;
    children: ReactNode;
}

export default function HeadingPrimary({ children, styles }: Props) {
    return (
        <Heading className={"pt-11 initial:pb-3 initial:text-5xl sm:pb-5 " + styles} size="9">
            {children}
        </Heading>
    );
}
