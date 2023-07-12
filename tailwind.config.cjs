/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      fontFamily: {
        pixeboy: ["Pixeboy"],
      },
      dropShadow: {
        white: "0px 4px 25px rgba(162, 162, 162, 0.1)",
        landingTitle: [
          // "0px 4px 50px #000000",
          "3px 10px 10px #743DFE",
        ],
      },
      fontSize: {
        "10xl": ["10rem", "0.75"],
        "11xl": ["13rem", "0.75"],
        "12xl": ["16rem", "0.75"],
      },
    },
  },
  plugins: [],
};
