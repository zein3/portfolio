/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      gray: '#8892B0',
      darkgray: '#233554',
      white: '#CCD6F6',
      primary: '#0A192F',
      secondary: '#64FFDA'
    }
  },
  plugins: [],
}
