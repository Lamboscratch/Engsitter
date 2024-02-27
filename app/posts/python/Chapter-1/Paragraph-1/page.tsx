import Article from "@/app/Components/Article";
import ContainerApp from "@/app/Components/ContainerApp";
import Index from "@/app/Components/Index";
import { Flex } from "@radix-ui/themes";
import { promises as fs } from "fs";
// import ImageDark from "./dark.svg";

const page = async () => {
    // const article = (await fs.readFile(process.cwd() + "/app/posts/python/introduction-to-python/article.md", "utf8")).replace("ImageDark", ImageDark.src);
    const path = "/app/Posts/Python/Chapter-1/Paragraph-1/article.md";
    const article = await fs.readFile(process.cwd() + path, "utf8");
    const { birthtime } = await fs.stat(process.cwd() + path);

    return (
        <ContainerApp>
            <Flex className="initial:!block sm:!flex" justify="between" gap={{ initial: "0", sm: "7" }}>
                <Article article={article} date={birthtime}></Article>
                <Index></Index>
            </Flex>
        </ContainerApp>
    );
};

export default page;
