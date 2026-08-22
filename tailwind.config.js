/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          light: '#c25068',
          DEFAULT: '#a52a42',
          dark: '#7a1b2e',
          darker: '#5c1422',
        },
        accent: {
          light: '#d4a843',
          DEFAULT: '#8a6108',
          dark: '#7a5608',
        },
        gray: {
          50: '#fdf2f4',
          100: '#fae8eb',
        },
      },
      fontFamily: {
        sans: ['"Hiragino Kaku Gothic ProN"', '"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
