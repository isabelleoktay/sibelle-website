/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      playfair: ["Playfair Display SC", "serif"],
    },
    extend: {
      backgroundImage: {
        "as-cover-no-title": "url('/img/as-cover-no-title.png')",
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      width: ["responsive", "hover", "focus"]
    }
  } 
}
