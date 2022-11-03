/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{},
      backgroundImage: {
        footerBanner: "url('/images/noise.png')",
      },
      colors: {
        blackrussian: "#1C1C1C",
        whitesmoke: "#F6F6F6",
        lightgrey:"#CFCFCF",
        bordergrey : "#8f8f8f",
        topgrey : "rgba(143, 143, 143, 0.4)",
        buttonblue : "#5135FD",
        titleblack: "#222222",
        matterhorn :"#525252",
        emerald: "#91F1C3",
        mustard: "#50227D",
        thepurple: "#FFCB49",
        symbcolor: "rgba(81, 53, 255, 0.1)"
      },
      fontFamily: {
        sans: "'Mont',sans-serif",
        'montbold' : ["MontBold", "cursive"],
        'montheavy' : ["MontHeavy", "cursive"],
        // 'montregular' : ["MontRegular", "cursive"],
        'montsemibold' : ["MontSemibold", "cursive"]
      }
    },
  },
  plugins: [],
};
