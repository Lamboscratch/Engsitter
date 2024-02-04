import { Container } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const ContainerApp = ({ children }: Props) => {
    return <Container size="4">{children}</Container>;
};

export default ContainerApp;
