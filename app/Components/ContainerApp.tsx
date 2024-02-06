import { Container } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    style?: string;
}

const ContainerApp = ({ children, style }: Props) => {
    return (
        <Container className={style + " mx-4"} size="4">
            {children}
        </Container>
    );
};

export default ContainerApp;
