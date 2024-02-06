import { ReactNode } from "react";
import ContainerApp from "./Components/ContainerApp";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

interface Props {
    children: ReactNode;
}

export default function Home({ children }: Props) {
    return (
        <ContainerApp>
            <NavBar></NavBar>
            <main>{children}</main>
            <Footer></Footer>
        </ContainerApp>
    );
}
