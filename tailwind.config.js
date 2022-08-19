/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

const Myclass = plugin(function ({ addUtilities }) {
    addUtilities({
        ".my-rotate-y-180": {
            transform: "rotateY(180deg)",
        },
        ".preserve-3d": {
            transformStyle: "preserve-3d",
        },
        ".perspective": {
            perspective: "1000px",
        },
        ".backface-hidden": {
            backfaceVisibility: "hidden",
        },
    })
})
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                xs: "400px",
            },
            fontFamily: {
                lora: "'Lora', serrif",
            },
            animation: {
                blob: "blob 7s infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
            },
            colors: {
                "primary-dark": "#272727",
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), Myclass],
}
