/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
      },
      animation: {
        header: 'header 1s ease-in-out infinite'
      },
      keyframes: {
        header: {
          '0%' : { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.8)' },
        }
      },
    },
  },
  plugins: [],
}

