import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./App.tsx', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [typography]
};