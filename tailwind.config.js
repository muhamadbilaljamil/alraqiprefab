/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      spaceM: ["space-mono"],
    },
    extend: {
      colors: {
        primary: "#183c47",
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
        ".custom-gradient": {
          backgroundImage: "linear-gradient(to right, #f06, #9f6)",
        },
      };
      addUtilities(myUtilities);
    },
  ],
};
