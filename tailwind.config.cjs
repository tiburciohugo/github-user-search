/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "medium-blue": "#0079FF",
        "medium-blue-light": "#4da1ff",
        "medium-gray": "#697C9A",
        "grayish-blue": "#4b6a9b",
        "dark-grayish-blue": "#2B3442",
        "lighter-blue": "#F6F8FF",
        whitish: "#fefefe",
        "darker-blue": "#1E2A47",
        "darkest-blue": "#141D2F",
      },
      screens: {
        "c-sm": "320px",
        "c-md": "426px",
        "c-lg": "769px",
      },
      fontFamily: {
        spacemono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
