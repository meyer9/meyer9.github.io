/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['IBM Plex Sans']
    },
    fontSize: {
      sm: '1rem',
      base: ['1.05rem', {
        lineHeight: '1.4'
      }],
      lg: ['1.3rem', {
        lineHeight: '1.4'
      }],
      xl: '1.563rem',
      '2xl': '1.953rem',
      '3xl': '2.441rem',
      '4xl': '3.052rem',
      '5xl': '3.815rem',
    },
    extend: {},
  },
  plugins: [],
}