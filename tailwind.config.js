/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#F5C16C',
          400: '#E6B35A',
          500: '#D9A049'
        }
      }
    }
  },
  plugins: [],
};