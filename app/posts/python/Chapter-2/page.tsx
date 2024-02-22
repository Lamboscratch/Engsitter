import Article from "@/app/Components/Article";
import ContainerApp from "@/app/Components/ContainerApp";
import Index from "@/app/Components/Index";
import Navigator from "@/app/Components/Navigator";
import ReleaseDate from "@/app/Components/ReleaseDate";
import { Flex } from "@radix-ui/themes";
import { promises as fs } from "fs";
// import ImageDark from "./dark.svg";

const page = async () => {
    // const article = (await fs.readFile(process.cwd() + "/app/posts/python/introduction-to-python/article.md", "utf8")).replace("ImageDark", ImageDark.src);
    const article = await fs.readFile(process.cwd() + "/app/posts/python/Chapter-2/article.md", "utf8");

    return (
        <ContainerApp>
            <Flex className="initial:!block sm:!flex" justify="between" gap={{ initial: "0", sm: "7" }}>
                <Flex direction="column">
                    <Flex className="mb-11" direction="column">
                        <Navigator></Navigator>
                        <h1 className="initial:my-2 sm:my-4 initial:text-5xl sm:text-6xl font-bold">react-markdown</h1>
                        <ReleaseDate>02/01/2024</ReleaseDate>
                    </Flex>
                    <Article article={article}></Article>
                </Flex>
                <Index></Index>
            </Flex>
        </ContainerApp>
    );
};

export default page;
