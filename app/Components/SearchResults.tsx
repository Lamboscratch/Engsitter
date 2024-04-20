import ReleaseDate from "@/app/components/ReleaseDate";
import { KBarResults, useMatches } from "kbar";

export default function RenderResults() {
    const { results } = useMatches();

    return (
        <KBarResults
            items={results}
            onRender={({ item, active }) =>
                typeof item === "string" ? (
                    <div className="radix-themes block border-t border-gray-200 px-4 pb-2 pt-3 text-xs !font-semibold uppercase text-primary-600 dark:border-gray-800">{item}</div>
                ) : (
                    <div>
                        <div className="flex cursor-pointer justify-between px-4 pt-2 pb-3 text-gray-700 dark:text-gray-100 bg-transparent">
                            <div className="flex w-full space-x-2">
                                <div className="radix-themes w-full block">
                                    <div>{item.subtitle ? <ReleaseDate style="text-grayPrimary text-xs" date={item.subtitle}></ReleaseDate> : ""}</div>
                                    {item.name === "Home" || item.name === "Posts" || item.name === "Tips" ? (
                                        <div className="flex justify-between">
                                            <div>{item.name}</div>
                                            <kbd className="inline-block whitespace-nowrap rounded border px-1.5 align-middle font-medium tracking-wide text-sm text-gray-400 border-gray-400">{item.shortcut}</kbd>
                                        </div>
                                    ) : (
                                        <div>{item.name}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        />
    );
}
