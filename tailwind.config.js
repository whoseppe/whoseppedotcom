/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      blackish: "#0D0D0D",
      purple: "#6F3198",
      red: "#ED1C24",
      blue: "#4D6DF3",
      pink: "#FFA3B1",
      green: "#0fff16",
      yellow: "#FFF200",
      white: "#FFF",
    },
    fontFamily: {
      lores: ["LoRes9PlusOTNarrow-Bold", "sans-serif"],
    },
  },
  plugins: [],
};
