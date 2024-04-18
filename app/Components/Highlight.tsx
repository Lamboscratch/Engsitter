"use client";

import "@/app/Data/atom-one-dark.min.css";
import hljs from "highlight.js";

interface Props {
    children: string;
    language: string;
}

export default function Highlight({ children, language }: Props) {
    const highlightedCode = hljs.highlight(children, { language: language }).value;

    return (
        <pre>
            <span className="hljs mb-0 p-4 block min-h-full overflow-auto">
                <code className={`language-${language}`} dangerouslySetInnerHTML={{ __html: highlightedCode }}></code>
            </span>
        </pre>
    );
}
