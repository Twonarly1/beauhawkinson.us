import typography from "@tailwindcss/typography"
import animate from "tailwindcss-animate"

import type { Config } from "tailwindcss"

module.exports = {
    content: [
        "./src/components/**/*.{ts,tsx}",
        "./src/app/**/*.{ts,tsx}",
        "./src/content/**/*.mdx",
    ],
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
    plugins: [typography, animate],
} satisfies Config
