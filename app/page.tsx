import ContainerApp from "./Components/ContainerApp";
import GoToLink from "./Components/GoToLink";
import Intro from "./Components/Intro";
import Posts from "./Components/Posts";

export default function Home() {
    return (
        <ContainerApp>
            <Intro></Intro>
            <Posts></Posts>
            <GoToLink name="All Posts" link="/posts"></GoToLink>
        </ContainerApp>
    );
}
