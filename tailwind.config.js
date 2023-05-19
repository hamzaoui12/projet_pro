/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bronze-hover": "#5c4828",
        "bronze": "#816438",
        "bronze-active": "#3a2d19",
      },
      fontFamily: {
        italiana: ["Italiana", "sans-serif"],
      },
    },
  },
  plugins: [],
}
