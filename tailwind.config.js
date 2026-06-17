/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: '#0d0d0d',
        surface: '#1a1a1a',
        border: '#2a2a2a',
        gold: {
          DEFAULT: '#C9A84C',
          dark: '#8B6914',
          light: '#e0bc5a',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#999999',
          muted: '#666666',
        },
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
