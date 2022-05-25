module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#F97316',
        slate: '#E2E8F0',
      },
      backgroundImage: {
        'header-background': "url('/images/header-background.jpg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
