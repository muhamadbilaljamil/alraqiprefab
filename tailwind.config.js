/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      spaceM: ["space-mono"],
      spaceG: ["SpaceGrotesk", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "576px",

        md: "768px",

        lg: "992px",

        lgm: "1100px",

        xl: "1200px",
      },
      colors: {
        primary: "#12497f",
        textPrimary: "#193D47",
        secondary: "#eaf3f6",
        blue: "#059ecc",
        lightBlue: "#B1D9EC",
        orange: "#f1754e",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const myUtilities = {
        ".container-c": {
          maxWidth: "1320px",
          margin: "0 auto",
        },
        ".custom-gradient": {
          // backgroundImage: "linear-gradient(to right, #f06, #9f6)",
        },
      };
      addUtilities(myUtilities);
    },
  ],
};
