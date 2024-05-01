"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    totalPages: number;
    currentPage: number;
}

export default function Pagination({ totalPages, currentPage }: Props) {
    const pathname = usePathname();
    const basePath = pathname.split("/")[1];
    const prevPage = currentPage - 1 > 0;
    const nextPage = currentPage + 1 <= totalPages;

    return (
        <div className="space-y-2 py-5 md:space-y-5">
            <nav className="flex justify-between">
                {!prevPage && (
                    <button className="text-base cursor-auto disabled:opacity-50" disabled={!prevPage}>
                        Previous
                    </button>
                )}
                {prevPage && (
                    <Link className="text-base" href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`} rel="prev" aria-label="Go to previous post page">
                        Previous
                    </Link>
                )}
                <span className="text-base">
                    {currentPage} of {totalPages}
                </span>
                {!nextPage && (
                    <button className="text-base cursor-auto disabled:opacity-50" disabled={!nextPage}>
                        Next
                    </button>
                )}
                {nextPage && (
                    <Link className="text-base" href={`/${basePath}/page/${currentPage + 1}`} rel="next" aria-label="Go to next post page">
                        Next
                    </Link>
                )}
            </nav>
        </div>
    );
}
