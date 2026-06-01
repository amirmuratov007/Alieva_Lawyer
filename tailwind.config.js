/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 30px 80px rgba(15, 23, 42, 0.18)',
      },
    },
  },
  plugins: [],
}
