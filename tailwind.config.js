/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'text-primary': '#000000',
        'text-secondary': '#6B7280',
        'border-gray': '#D1D5DB',
      },
      borderRadius: {
        'lg': '8px',
      }
    },
  },
  plugins: [],
}
