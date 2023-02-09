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

            screens: {
                xs: "440px",
            },
        },
    },
}
