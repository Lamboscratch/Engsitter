import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto mx-4">
            <div className="flex py-4 min-h-16 border-solid border-gray-200 border-t dark:border-zinc-700 justify-between">
                <p className="flex items-center text-base">&copy; {currentYear} Engsitter</p>
                <div className="flex items-center justify-between">
                    <Link className="!text-base hover:underline hover:decoration-solid hover:decoration-orangeSite hover:underline-offset-4" href="mailto:engsitter@gmail.com" aria-label="Link to email address">
                        engsitter@gmail.com
                    </Link>
                </div>
            </div>
        </footer>
    );
}
