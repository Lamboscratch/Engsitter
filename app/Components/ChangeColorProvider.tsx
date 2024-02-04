"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export function ChangeColorProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            {children}
        </ThemeProvider>
    );
}
