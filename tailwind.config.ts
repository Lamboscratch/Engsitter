import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/pliny/**/*.js", "./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                orangeSite: "#ffad00",
                orangeSiteDarker: "#e69c00",
                blackPrimary: "rgba(17, 17, 19, 0.91)",
                blackPrimaryFull: "rgba(17, 17, 19)",
                grayPrimary: "#979797",
                lightGrayPrimary: "#d5d5d5",
                whitePrimary: "rgba(255, 255, 255, 0.91)",
                whitePrimaryFull: "rgba(255, 255, 255)",
            },
            lineHeight: {
                extraSmall: "0.8",
            },
            keyframes: {
                slideDownAndFade: {
                    from: { opacity: "0", transform: "translateY(-2px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                slideLeftAndFade: {
                    from: { opacity: "0", transform: "translateX(2px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                slideUpAndFade: {
                    from: { opacity: "0", transform: "translateY(2px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                slideRightAndFade: {
                    from: { opacity: "0", transform: "translateX(-2px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
            },
            animation: {
                slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideRightAndFade: "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            },
        },
        screens: {
            initial: "0px",
            xs: "520px",
            sm: "768px",
            md: "1024px",
            lg: "1280px",
            xl: "1640",
        },
    },
    plugins: [],
    darkMode: "class",
};

export default config;
