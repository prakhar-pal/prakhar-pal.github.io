/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: '0px 0px 10px rgb(217 70 239)'
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(315deg,#42d392 25%,#647eff)"
      }
    },
  },
  plugins: [],
}
