import ImageTheme from "@/app/components/ImageTheme";

export default function Intro() {
    return (
        <div className="flex my-24 flex-col items-center justify-center gap-y-4">
            <ImageTheme style="w-20 h-20 mb-6" />
            <h1 className="text-6xl font-bold">
                <span className="text-orangeSite">Eng</span>
                sitter
            </h1>
            <p className="text-2xl mt-3 font-medium text-center">The gateway to Networking and Cybersecurity insights</p>
        </div>
    );
}
