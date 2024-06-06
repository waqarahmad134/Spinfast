/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
      },
      lineHeight: {
        lineHeight: 1.5,
      },
      colors: {
        theme: "#00D8CF",
        themeGray: "#404040",
        themeDarkBlue: "rgba(24, 6, 60, 1)",
        themeVector: "#FFBA49",
        themeFooter: "#D9DBE9",
        themePurple: "#A976FD26",
      },
      boxShadow: {
        textShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0)",
      },
      backgroundImage: {
        dropDownBg:
          "linear-gradient(126.56deg, rgba(134, 142, 150, 0.2) 4.61%, rgba(169, 180, 191, 0.2) 99.44%)",
        servicesBg:
          "linear-gradient(to right, #1293EC0D, #A976FD26, #1293EC0D)",
        chooseUs: "url('/public/images/choose-us-card-1.webp')",
      },
    },
  },
  plugins: [],
};
