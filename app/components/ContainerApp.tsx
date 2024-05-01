import { Container } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    style?: string;
}

export default function ContainerApp({ children, style }: Props) {
    return (
        <Container className={style + " mx-4"} size="4">
            {children}
        </Container>
    );
}
