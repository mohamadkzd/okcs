/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translatey(-100px)' },
          '50%': { transform: 'translatey(0)' },
        }
      }
    }
  },
  plugins: [],
}

