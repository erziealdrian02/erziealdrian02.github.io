/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
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

    keyframes: {
      loop: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
    animation: {
      loop: 'loop 20s linear infinite',
    },
  },
  plugins: [],
};
