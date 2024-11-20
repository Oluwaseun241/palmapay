/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/onboarding/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Neue: ["NeueMontreal-Regular"],
        NeueBold: ["NeueMontreal-Bold"],
      },
      colors: {
        primary: {
          DEFAULT: "#FFC801",
          100: "",
        },
      },
    },
  },
  plugins: [],
};
