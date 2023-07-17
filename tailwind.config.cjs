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
    screens: {
      lgoverflow: "1146px",
      smoverflow: "791px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",

      lg1195: "1200px",

      mobile: "457px",
      // => @media (min-width: 1536px) { ... }
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
