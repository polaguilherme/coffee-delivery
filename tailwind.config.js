/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        "base-text": "#574F4D",
        "base-lable": "#8D8686",
        "base-subtitle": "#403937",
      },
      fontSize: {
        textXsmall: "0.625rem",
      },
      fontFamily: {
        Baloo: "'Baloo 2'",
        Roboto: "'Roboto'",
      },
      colors: {
        "brand-purple": "#8047F8",
        "purple-dark": "#4B2995",
        "purple-light": "#EBE5F9",
        "brand-yellow": "#DBAC2C",
        "yellow-dark": "#C47F17",
        "yellow-light": "#F1E9C9",
        "base-text": "#574F4D",
        "base-lable": "#8D8686",
        "base-card": "#F3F2F2",
        "base-button": "#E6E5E5",
        "base-input": "#EDEDED",
      },
    },
  },
  plugins: [],
};
