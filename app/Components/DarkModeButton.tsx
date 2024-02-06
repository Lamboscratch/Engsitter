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

    return <button onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}>{theme === "dark" ? <TbMoonFilled size={24} /> : <TbSunFilled size={24} />}</button>;
};

export default DarkModeButton;
