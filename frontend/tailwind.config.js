/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "colors": {
        "primary": {
          "50": "#eee8ed",
          "100": "#dcd1da",
          "200": "#b9a3b6",
          "300": "#977591",
          "400": "#74476d",
          "500": "#511948",
          "600": "#41143a",
          "700": "#310f2b",
          "800": "#200a1d",
          "900": "#10050e"
        },
        "primary-bg": {
          "50": "#fcfafc",
          "100": "#f9f4fa",
          "200": "#f3e9f5",
          "300": "#ecdfef",
          "400": "#e6d4ea",
          "500": "#e0c9e5",
          "600": "#b3a1b7",
          "700": "#867989",
          "800": "#5a505c",
          "900": "#2d282e"
        },
        "secondary": colors.white,
        "secondary-bg": {
          "50": "#f0eef5",
          "100": "#e1ddec",
          "200": "#c4bad9",
          "300": "#a698c5",
          "400": "#8975b2",
          "500": "#6b539f",
          "600": "#56427f",
          "700": "#40325f",
          "800": "#2b2140",
          "900": "#151120"
        },
        "tertiary": {
          "50": "#f2f2f2",
          "100": "#e6e6e6",
          "200": "#cccccc",
          "300": "#b3b3b3",
          "400": "#999999",
          "500": "#808080",
          "600": "#666666",
          "700": "#4d4d4d",
          "800": "#333333",
          "900": "#1a1a1a"
        },
        "tertiary-bg": {
          "50": "#fbfbfb",
          "100": "#f6f6f6",
          "200": "#eeeeee",
          "300": "#e5e5e5",
          "400": "#dddddd",
          "500": "#d4d4d4",
          "600": "#aaaaaa",
          "700": "#7f7f7f",
          "800": "#555555",
          "900": "#2a2a2a"
        }
      }
    },
  },
  plugins: [],
};
