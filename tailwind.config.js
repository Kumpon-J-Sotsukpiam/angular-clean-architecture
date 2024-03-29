const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('flowbite/plugin') // add this line
  ],
}

