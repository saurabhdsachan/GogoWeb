// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} \*/

module.exports = {
  content: [
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-primary)', ...fontFamily.sans],
        serif: ['var(--font-secondary)', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
