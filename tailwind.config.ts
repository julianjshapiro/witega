import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        "bg-[url('/calculus.png')]",
        "bg-blue-500",
        "bg-green-500",
        "bg-yellow-500",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                secondary: "var(--secondary)",
                tertiary: "var(--tertiary)",
            },
        },
    },
    plugins: [],
} satisfies Config;
