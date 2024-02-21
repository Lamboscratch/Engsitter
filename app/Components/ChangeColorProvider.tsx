"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function ChangeColorProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            {children}
        </ThemeProvider>
    );
}
