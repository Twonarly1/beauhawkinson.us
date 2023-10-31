import type { Config } from "tailwindcss"

module.exports = {
    content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: "class",
    theme: {
        extend: {
            animation: {
                blink: "blink 1s steps(2) infinite",
            },
            keyframes: {
                blink: {
                    "0%": { opacity: "0" },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
} satisfies Config
