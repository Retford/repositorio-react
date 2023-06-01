/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        subida: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        subida: 'subida 1s infinite',
      },
    },
  },
  plugins: [],
};
