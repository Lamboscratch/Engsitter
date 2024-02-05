import { ReactNode } from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

interface Props {
    children: ReactNode;
}

export default function Home({ children }: Props) {
    return (
        <>
            <NavBar></NavBar>
            <main>{children}</main>
            <Footer style="py-7 border-solid border-gray-200 border-t dark:border-zinc-800"></Footer>
        </>
    );
}
