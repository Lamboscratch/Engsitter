import giscusConfigs from "@/app/configs/giscus.config";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function Comments() {
    const { resolvedTheme } = useTheme();

    /* TODO: change theme color (see DarkModeButton.tsx) */

    return (
        <div className="mx-auto max-w-prose py-6">
            <Giscus
                repo={giscusConfigs.repo} // to be filled
                repoId={giscusConfigs.repoId} // to be filled
                category={giscusConfigs.category} // to be filled
                categoryId={giscusConfigs.categoryId} // to be filled
                mapping="pathname" // to be filled
                reactionsEnabled="1" // to be filled
                emitMetadata="0" // to be filled
                inputPosition="top" // to be filled
                theme={resolvedTheme === "dark" ? "transparent_dark" : "light"} // to be filled
                loading="lazy" // to be filled
            />
        </div>
    );
}
