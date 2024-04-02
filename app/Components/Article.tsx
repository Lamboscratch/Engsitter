import Link from "next/link";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";
import gfm from "remark-gfm";
import calculateHeadersUrl from "../Utilities/calculateHeadersUrl";
import Copy from "./Copy";
// import Comments from "./Comments";
// import { Flex } from "@radix-ui/themes";

interface Props {
    article: string;
}

export default function Article({ article }: Props) {
    const margins = "initial:mt-3 initial:mb-2 sm:mt-4 sm:mb-3";

    return (
        <div className="initial:w-full sm:min-w-[65ch]">
            <article className="pb-3.5">
                {" "}
                {/* // border-solid border-b border-gray-200 dark:border-zinc-700 */}
                <Markdown
                    className="initial:text-base sm:text-lg"
                    remarkPlugins={[gfm]}
                    components={{
                        code(props) {
                            const { children, className, node, ...rest } = props;
                            const match = /language-(\w+)/.exec(className || "");
                            return match ? (
                                <span className="block relative">
                                    <Copy text={children!.toString()}></Copy>
                                    <SyntaxHighlighter {...rest} className={className + " block initial:!text-sm sm:!text-base"} children={String(children).replace(/\n$/, "")} language={match[1]} style={style} />
                                </span>
                            ) : (
                                <code {...rest} className={className}>
                                    {children}
                                </code>
                            );
                        },
                        h2(props) {
                            const { children, node, ...rest } = props;
                            return (
                                <h2 id={calculateHeadersUrl(children?.toString()!)} className={`initial:text-2xl sm:text-3xl font-bold initial:mt-6 initial:mb-3 sm:mt-7 sm:mb-4`} {...rest}>
                                    <Link href={`#${calculateHeadersUrl(children?.toString()!)}`}>{children}</Link>
                                </h2>
                            );
                        },
                        h3(props) {
                            const { children, node, ...rest } = props;
                            return (
                                <h3 id={calculateHeadersUrl(children?.toString()!)} className={`initial:text-xl sm:text-2xl font-bold initial:mt-6 initial:mb-3 sm:mt-7 sm:mb-4`} {...rest}>
                                    <Link href={`#${calculateHeadersUrl(children?.toString()!)}`}>{children}</Link>
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
            {/* <Comments /> */}
        </div>
    );
}
