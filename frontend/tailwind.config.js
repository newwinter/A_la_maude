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
      beige: "#F2E3D5",
      light: "#FFFCF1",
      yellow: "#ffc82c",
      text_color: "#696D7D",
      gray: {
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        700: "#374151",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lobster: ["Lobster Two", "serif"],
    },
  },
  plugins: [],
};
