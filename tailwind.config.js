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

        textLight: '#0d0b14',
        backgroundLight: '#faf9fd',
        primaryLight: '#14b8a6',
        secondaryLight: '#9b81e7',
        accentLight: '#744cec',

        textDark: '#e9e9f1',
        backgroundDark: '#010104',
        primaryDark: '#9192de',
        secondaryDark: '#522183',
        accentDark: '#a04acf',
      },
    },

    keyframes: {
      loop: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
        },
        '50%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
      verticalMove: {
        '0%, 100%': { transform: 'translateY(-10%)' },
        '50%': { transform: 'translateY(0)' },
      },
    },
    animation: {
      loop: 'loop 20s linear infinite',
      bounce: 'bounce 1s infinite',
      verticalMove: 'verticalMove 20s ease-in-out infinite',
    },
  },
  plugins: [],
};
