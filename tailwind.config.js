/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./(app|core|components)/**/*.{ts,tsx}"],
    darkMode: "class",
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwind-scrollbar-hide"),
        require("tailwind-scrollbar"),
        require("@tailwindcss/forms"),
    ],
    theme: {
        extend: {
            animation: {
                airplane: "airplane 5s",
                wiggle: "wiggle 1s ease-in-out infinite",
            },
            colors: {
                "primary-dark": "#272727",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
            keyframes: {
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
            },
            screens: {
                xs: "440px",
            },
        },
    },
}
