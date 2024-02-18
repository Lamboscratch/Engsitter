import Article from "@/app/Components/Article";
import ContainerApp from "@/app/Components/ContainerApp";
import HeadingPrimary from "@/app/Components/HeadingPrimary";
import ReleaseDate from "@/app/Components/ReleaseDate";
import { Flex } from "@radix-ui/themes";
import { promises as fs } from "fs";
// import ImageDark from "./dark.svg";

const page = async () => {
    // const article = (await fs.readFile(process.cwd() + "/app/posts/python/introduction-to-python/article.md", "utf8")).replace("ImageDark", ImageDark.src);
    const article = await fs.readFile(process.cwd() + "/app/posts/python/introduction-to-python/article.md", "utf8");

    return (
        <ContainerApp>
            <Flex className="mb-11" direction="column">
                <h1 className="mt-11 initial:mb-2 sm:mb-4 initial:text-5xl sm:text-6xl font-bold">react-markdown</h1>
                <ReleaseDate>02/01/2024</ReleaseDate>
            </Flex>
            <Article article={article}></Article>
        </ContainerApp>
    );
};

export default page;
