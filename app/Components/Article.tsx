import Highlight from "@/app/components//Highlight";
import Copy from "@/app/components/Copy";
import Link from "next/link";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
import calculateHeadersUrl from "../utilities/calculateHeadersUrl";
// import Comments from "./Comments";
// import { Flex } from "@radix-ui/themes";

interface Props {
    article: string;
}

export default function Article({ article }: Props) {
    return (
        <div className="initial:w-full sm:min-w-[65ch]">
            <article>
                <Markdown
                    className="text-lg"
                    remarkPlugins={[gfm]}
                    components={{
                        code(props) {
                            const { children, className, node, ...rest } = props;
                            const match = /language-(\w+)/.exec(className || "");
                            return match ? (
                                <span className="block relative">
                                    <Copy text={children!.toString()}></Copy>
                                    <Highlight children={String(children)} language={match[1]} />
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
                                <h2 id={calculateHeadersUrl(children?.toString()!)} className={`text-3xl font-bold mt-6 mb-4`} {...rest}>
                                    <Link href={`#${calculateHeadersUrl(children?.toString()!)}`}>{children}</Link>
                                </h2>
                            );
                        },
                        h3(props) {
                            const { children, node, ...rest } = props;
                            return (
                                <h3 id={calculateHeadersUrl(children?.toString()!)} className={`text-2xl font-bold mt-7 mb-4`} {...rest}>
                                    <Link href={`#${calculateHeadersUrl(children?.toString()!)}`}>{children}</Link>
                                </h3>
                            );
                        },
                        ul(props) {
                            const { children, node, ...rest } = props;
                            return (
                                <ul className={`list-inside list-disc mb-3 mt-4`} {...rest}>
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
                                <p className={`mb-3`} {...rest}>
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
