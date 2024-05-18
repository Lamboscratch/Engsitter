import Copy from "@/app/components/Copy";
import Highlight from "@/app/components/Highlight";
import calculateHeadersUrl from "@/app/utilities/calculateHeadersUrl";
import Link from "next/link";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
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
                            const headerName = calculateHeadersUrl(children?.toString()!);
                            return (
                                <h2 id={headerName} className="text-3xl font-bold mt-6 mb-4" {...rest}>
                                    <Link href={`#${headerName}`} aria-label={`Link to ${headerName}`}>
                                        {children}
                                    </Link>
                                </h2>
                            );
                        },
                        h3(props) {
                            const { children, node, ...rest } = props;
                            const headerName = calculateHeadersUrl(children?.toString()!);
                            return (
                                <h3 id={headerName} className="text-2xl font-bold mt-7 mb-4" {...rest}>
                                    <Link href={`#${headerName}`} aria-label={`Link to ${headerName}`}>
                                        {children}
                                    </Link>
                                </h3>
                            );
                        },
                        ul(props) {
                            const { children, node, ...rest } = props;
                            return (
                                <ul className="list-inside list-disc mb-3 mt-4" {...rest}>
                                    {children}
                                </ul>
                            );
                        },
                        a(props) {
                            const { children, node, ...rest } = props;
                            return (
                                <a className="underline decoration-solid decoration-orangeSite underline-offset-4" target="_blank" {...rest}>
                                    {children + " 🔗"}
                                </a>
                            );
                        },
                        p(props) {
                            const { children, node, ...rest } = props;
                            return (
                                <p className="mb-3" {...rest}>
                                    {children}
                                </p>
                            );
                        },
                        img(props) {
                            const { children, node, ...rest } = props;
                            return <img className="first-of-type:mt-[1.875rem]" {...rest} />;
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
