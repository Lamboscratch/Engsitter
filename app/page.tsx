import ContainerApp from "./Components/ContainerApp";
import Intro from "./Components/Intro";
import Posts from "./Components/Posts";

export default function Home() {
    return (
        <ContainerApp>
            <Intro></Intro>
            <Posts></Posts>
        </ContainerApp>
    );
}
