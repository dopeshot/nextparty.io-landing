/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif']
    },
    colors: {
      'black': '#0A0A0A',
      'white': '#FFFFFF',
      'red-500': "#DB162F",
    },
    extend: {},
  },
  plugins: [],
}
