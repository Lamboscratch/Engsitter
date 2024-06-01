import Link from "next/link";

interface Props {
    name: string;
    link: string;
    type: string;
}

export default function GoToLink({ name, link, type }: Props) {
    return (
        <div className={`flex my-5 items-end ${type === "posts" ? "justify-end" : "justify-center"}`}>
            <Link className="flex text-base font-semibold items-center hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4" href={link}>
                {name} {type === "posts" ? "➝" : "⭡"}
            </Link>
        </div>
    );
}
