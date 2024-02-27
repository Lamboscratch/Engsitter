import { Flex } from "@radix-ui/themes";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia as style } from "react-syntax-highlighter/dist/esm/styles/prism";
import gfm from "remark-gfm";
import Copy from "./Copy";
import Navigator from "./Navigator";
import ReleaseDate from "./ReleaseDate";

interface Props {
    article: string;
    date: Date;
}

const Article = ({ article, date }: Props) => {
    const margins = "initial:mt-3 initial:mb-2 sm:mt-4 sm:mb-3";

    return (
        <article className="max-w-prose">
            <Markdown
                className="initial:text-base sm:text-lg"
                remarkPlugins={[gfm]}
                components={{
                    code(props) {
                        const { children, className, node, ...rest } = props;
                        const match = /language-(\w+)/.exec(className || "");
                        return match ? (
                            <div className="relative">
                                <Copy text={children!.toString()}></Copy>
                                <SyntaxHighlighter {...rest} className={className + " initial:!text-sm sm:!text-base"} children={String(children).replace(/\n$/, "")} language={match[1]} style={style} />
                            </div>
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        );
                    },
                    h1(props) {
                        const { children, node, ...rest } = props;
                        return (
                            <Flex className="initial:mt-0 sm:mt-5 initial:mb-7 sm:mb-8" direction="column">
                                <Navigator></Navigator>
                                <h1 className={`initial:text-5xl sm:text-6xl font-bold initial:mt-4 sm:mt-5 initial:mb-2 sm:mb-3`} {...rest}>
                                    {children}
                                </h1>
                                <ReleaseDate date={date}></ReleaseDate>
                            </Flex>
                        );
                    },
                    h2(props) {
                        const { children, node, ...rest } = props;
                        return (
                            <h2 className={`initial:text-2xl sm:text-3xl font-bold initial:mt-6 initial:mb-3 sm:mt-7 sm:mb-4`} {...rest}>
                                {children}
                            </h2>
                        );
                    },
                    h3(props) {
                        const { children, node, ...rest } = props;
                        return (
                            <h3 className={`initial:text-xl sm:text-2xl font-bold initial:mt-6 initial:mb-3 sm:mt-7 sm:mb-4`} {...rest}>
                                {children}
                            </h3>
                        );
                    },
                    ul(props) {
                        const { children, node, ...rest } = props;
                        return (
                            <ul className={`list-inside list-disc ${margins}`} {...rest}>
                                {children}
                            </ul>
                        );
                    },
                    a(props) {
                        const { children, node, ...rest } = props;
                        return (
                            <a className={`underline decoration-solid decoration-orangeSite underline-offset-4`} {...rest}>
                                {children}
                            </a>
                        );
                    },
                    p(props) {
                        const { children, node, ...rest } = props;
                        return (
                            <p className={`initial:mb-2 sm:mb-3`} {...rest}>
                                {children}
                            </p>
                        );
                    },
                }}
            >
                {article}
            </Markdown>
        </article>
    );
};

export default Article;
