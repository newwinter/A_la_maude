/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      lemon: "#E0C879",
      terracotta: "#D77B6F",
      light: "#FFFCF1",
      yellow: "#ffc82c",
      text_color: "#696D7D",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lobster: ["Lobster Two", "serif"],
    },
  },
  plugins: [],
};
