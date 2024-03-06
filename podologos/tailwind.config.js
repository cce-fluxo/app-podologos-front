/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { azul: "#2087ED", branco: "#FBFBFB", cinza: "#C3C5C7" },
    },
  },
  plugins: [],
};
