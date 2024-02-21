"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";

const DarkModeButton = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    if (resolvedTheme === "dark")
        return (
            <button className="rounded-sm outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite" onClick={() => setTheme("light")} aria-label="Change color button">
                <TbMoonFilled size={24} />
            </button>
        );
    if (resolvedTheme === "light")
        return (
            <button className="rounded-sm outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite" onClick={() => setTheme("dark")} aria-label="Change color button">
                <TbSunFilled size={24} />
            </button>
        );
};

export default DarkModeButton;
