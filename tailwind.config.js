/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
      colors: {
        primary: '#14b8a6',
        blue: '#0ea5e9',
        dark: '#0f172a',
        secondary: '#64748b',
      },
    },
  },
  plugins: [],
};