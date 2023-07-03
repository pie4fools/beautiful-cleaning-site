/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          "0%" : {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(3px, 10px) scale(1)",
          },
          "66%": {
            transform: "translate(-15px, 5px) scale(0.8)",
          },
          "100%": {
            transform: "translate(-5px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}

