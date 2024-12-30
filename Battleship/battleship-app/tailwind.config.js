/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jolly': ['Jolly Lodger', 'sans-serif'] // Assuming the font is named "Jolly Lodger"
      }
    },
  },
  plugins: [],
}

