import { genPageMetadata } from "@/app/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return genPageMetadata({
        title: "AdBlocker detected",
        description: "AdBlocker detected",
    });
}

export default function Page() {
    return (
        <div className="notFoundHeight mx-4 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">AdBlocker detected</h1>
            <p className="text-lg pt-6 max-w-prose text-center">It appears that you are using an ad-blocking extension in your browser. Please disable it and reload the page.</p>
        </div>
    );
}
