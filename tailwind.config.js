module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-dark': '#272727',
        'secondary-dark': '#1c1c1c',
        'primary-light': '#dddddd',
      },
      backgroundImage: {
        'header-background': "url('/images/header-background.jpg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide', '@tailwindcss/aspect-ratio')],
}
