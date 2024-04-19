/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "black-transparent": "rgba(0, 0, 0, 0.4)",
      },

      colors: {
        azul: "#2087ED",
        azul_escuro: "#0A284D",
        branco: "#FBFBFB",
        cinza: "#C3C5C7",
        texto_cinza: "#4F5450",
        texto_cinza_claro: "#636C74",
        titulo_anamnese: "#46555A",
        botao_desabilitado: "#BBBBBB",
      },
    },
  },
  plugins: [],
};
