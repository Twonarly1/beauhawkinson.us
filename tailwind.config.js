/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./(app|core|components)/**/*.{ts,tsx}",
        "./content/**/*.mdx",
        "mdx-components.{ts,tsx}",
    ],
    darkMode: "class",
    plugins: [require("@tailwindcss/typography")],
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
}
