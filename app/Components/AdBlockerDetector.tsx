"use client";

import { useDetectAdBlock } from "adblock-detect-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const AdBlockerDetector = () => {
    const router = useRouter();
    const pathname = usePathname();
    const adBlockDetected = useDetectAdBlock();

    useEffect(() => {
        if (adBlockDetected) {
            router.push("/adBlockerDetected");
        } else if (pathname === "/adBlockerDetected") {
            router.push("/");
        }
    }, [pathname, []]);

    return <div></div>;
};

export default AdBlockerDetector;
