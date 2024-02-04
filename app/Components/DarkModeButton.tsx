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
        <button className="right-4 bottom-4" onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}>
            {theme === "dark" ? <TbMoonFilled className="size-6" /> : <TbSunFilled className="size-6" />}
        </button>
    );
};

export default DarkModeButton;
