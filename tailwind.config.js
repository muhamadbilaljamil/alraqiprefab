/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary' : '#183c47',
        'secondary' : '#eaf3f6',
        'blue' : '#059ecc',
        'orange' : '#f1754e',
      }
    },
  },
  plugins: [],
}

