/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#a1902e',
        'brand-gold-hover': '#b4a233',
        'bg-dark': '#0a0a0a',
        'card-dark': '#151515',
      },
      fontFamily: {
        agustina: ['"Agustina Regular"', 'cursive', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}