/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#EF534E',
          dark: '#d94a42',
          muted: '#fde8e7',
        },
        property: {
          title: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 12px 40px -12px rgba(15, 23, 42, 0.14)',
      },
    },
  },
  plugins: [],
};
