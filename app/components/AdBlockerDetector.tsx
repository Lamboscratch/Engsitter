"use client";

import { useDetectAdBlock } from "adblock-detect-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdBlockerDetector() {
    const router = useRouter();
    const pathname = usePathname();
    const adBlockDetected = useDetectAdBlock();

    useEffect(() => {
        if (adBlockDetected && pathname !== "/") {
            router.push("/adBlockerDetected");
        } else if (pathname === "/adBlockerDetected") {
            router.push("/");
        }
    }, [pathname, []]);

    return <div></div>;
}
