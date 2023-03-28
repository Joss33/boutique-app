/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        shirly:{
          'primary': '#E66464',
          'accent': '#EF9C9C',
          'accent-gray': '#FFE3E2',
          'accent-gray-02': '#FFF7F6',
        }
      }
    },
  },
  plugins: [],
};