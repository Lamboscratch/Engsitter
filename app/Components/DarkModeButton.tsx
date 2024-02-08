"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";

const DarkModeButton = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button className="rounded-sm outline-none focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-orangeSite" onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}>
            {theme === "dark" ? <TbMoonFilled size={24} /> : <TbSunFilled size={24} />}
        </button>
    );
};

export default DarkModeButton;
