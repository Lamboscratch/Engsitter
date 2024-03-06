"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";

export default function DarkModeButton() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const styleClass = "rounded-sm outline-none initial:ml:0 sm:ml-6 focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite";
    const ariaLabel = "Change color button";
    const imageSize = 25;

    if (resolvedTheme === "dark")
        return (
            <button className={styleClass} onClick={() => setTheme("light")} aria-label={ariaLabel}>
                <TbMoonFilled size={imageSize} />
            </button>
        );
    if (resolvedTheme === "light")
        return (
            <button className={styleClass} onClick={() => setTheme("dark")} aria-label={ariaLabel}>
                <TbSunFilled size={imageSize} />
            </button>
        );
}
