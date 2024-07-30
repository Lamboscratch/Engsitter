"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function Comments() {
    const { resolvedTheme } = useTheme();

    return (
        <div className="pt-6 mt-6 border-solid border-gray-200 border-t dark:border-zinc-700">
            <Giscus
                repo="lamboscratch/Engsitter"
                repoId="R_kgDOMKN1zQ"
                category="Announcements"
                categoryId="DIC_kwDOMKN1zc4CgIIn"
                mapping="pathname"
                strict="0"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme={resolvedTheme === "light" ? "light" : "dark_dimmed"}
                lang="en"
                loading="eager"
            />
        </div>
    );
}
