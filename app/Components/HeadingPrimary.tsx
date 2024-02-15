import { Heading } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const HeadingPrimary = ({ children }: Props) => {
    return (
        <Heading className="py-11" size="9">
            {children}
        </Heading>
    );
};

export default HeadingPrimary;
