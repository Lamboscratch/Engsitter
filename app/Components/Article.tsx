import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";
import gfm from "remark-gfm";

interface Props {
    article: string;
}

const Article = ({ article }: Props) => {
    const margins = "initial:mt-3 initial:mb-2 sm:mt-4 sm:mb-3";
    return (
        <article className="max-w-prose">
            <Markdown
                className="initial:text-base sm:text-lg"
                remarkPlugins={[gfm]}
                components={{
                    code(props) {
                        const { children, className, ...rest } = props;
                        const match = /language-(\w+)/.exec(className || "");
                        return match ? (
                            <SyntaxHighlighter {...rest} PreTag="div" children={String(children).replace(/\n$/, "")} language={match[1]} style={style} />
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        );
                    },
                    h1(props) {
                        const { children, ...rest } = props;
                        return (
                            <h1 className={`initial:text-5xl sm:text-6xl font-bold`} {...rest}>
                                {children}
                            </h1>
                        );
                    },
                    h2(props) {
                        const { children, ...rest } = props;
                        return (
                            <h2 className={`initial:text-2xl sm:text-3xl font-bold initial:mt-6 initial:mb-3 sm:mt-7 sm:mb-4`} {...rest}>
                                {children}
                            </h2>
                        );
                    },
                    ul(props) {
                        const { children, ...rest } = props;
                        return (
                            <ul className={`list-inside list-disc ${margins}`} {...rest}>
                                {children}
                            </ul>
                        );
                    },
                    a(props) {
                        const { children, ...rest } = props;
                        return (
                            <a className={`underline decoration-solid decoration-orangeSite underline-offset-4`} {...rest}>
                                {children}
                            </a>
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
