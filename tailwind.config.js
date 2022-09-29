/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

const Myclass = plugin(function ({ addUtilities, theme }) {
    addUtilities({
        // ".my-rotate-y-180": {
        //     transform: "rotateY(180deg)",
        // },
        // ".preserve-3d": {
        //     transformStyle: "preserve-3d",
        // },
        // ".perspective": {
        //     perspective: "1000px",
        // },
        // ".backface-hidden": {
        //     backfaceVisibility: "hidden",
        // },
        ".fade-up": {
            transition:
                "transform 1s cubic-bezier(0.64, 0.04, 0.26, 0.87), opacity 0.8s cubic-bezier(0.64, 0.04, 0.26, 0.87)",
            opacity: theme("opacity.0"),
            transform: "translate3d(2rem, 0, 0) ",
        },
        ".faded": {
            opacity: theme("opacity.100"),
            transform: "translate3d(0,0,0)",
        },
        ".fade-in": {
            transition:
                "transform 1s cubic-bezier(0.64, 0.04, 0.26, 0.87), opacity 0.8s cubic-bezier(0.64, 0.04, 0.26, 0.87)",
            opacity: theme("opacity.0"),
            transform: "translate3d(0, 0, 0) ",
        },
    })
})
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                xs: "440px",
                "2xs": "540px",
                mega: "1600px",
            },

            fontFamily: {
                sans: ["Outfit", "sans-serif"],
                winner: ["Great Vibes", "cursive"],
            },
            animation: {
                blob: "blob 7s infinite",
                airplane: "airplane 5s",
                wiggle: "wiggle 1s ease-in-out  infinite",
                "spin-slow": "spin 5s linear infinite",
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
                airplane: {
                    "0%": {
                        transform: "rotate(10deg) scale(1)",
                    },
                    "5%": {
                        transform: "rotate(-15deg) scale(1.25)",
                    },
                    "10%": {
                        transform: "rotate(5deg) scale(1.5)",
                    },
                    "15%": {
                        transform: "rotate(-10deg) scale(1.75)",
                    },
                    "20%": {
                        transform: "rotate(0) scale(2)",
                    },
                    "100%": {
                        transform: "scale(20) translate3d(100vw, -100vh, 0) rotate(0)",
                    },
                },
                wiggle: {
                    "0%, 100%": { transform: "rotate(-10deg)" },
                    "50%": { transform: "rotate(10deg)" },
                },
                spinning: {
                    "0%, 100%": {
                        transform: "rotate(360deg)",
                    },
                },
            },
            colors: {
                "primary-dark": "#272727",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwind-scrollbar-hide"),
        require("tailwind-scrollbar"),
        require("@tailwindcss/forms"),
        Myclass,
    ],
}
