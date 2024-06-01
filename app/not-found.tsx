import { genPageMetadata } from "@/app/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return genPageMetadata({
        title: `Page not found`,
        description: `Not found page`,
    });
}

const NotFoundPage = () => {
    return (
        <div className="notFoundHeight mx-4 flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold">404</h1>
            <h2 className="text-2xl pt-16 font-bold">Page not found</h2>
            <p className="text-lg pt-6 max-w-prose text-center">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        </div>
    );
};

export default NotFoundPage;
