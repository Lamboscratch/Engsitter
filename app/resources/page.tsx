import { genPageMetadata } from "@/app/seo";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { page: string } }): Promise<Metadata> {
    return genPageMetadata({
        title: "Resources",
        description: "Useful resources to strengthen understanding",
    });
}

export default function Page() {
    return (
        <div className="my-16 mx-4">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl text-center font-bold">Coming soon...</h1>
            </div>
        </div>
    );
}
