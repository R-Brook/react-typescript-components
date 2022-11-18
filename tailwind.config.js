/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        720: "45rem",
      },
      borderWidth: {
        3: "3px",
      },
    },
    colors: {
      black: "#000000",
      green: "#7CFC00",
      white: "#FFFFFF",
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      default: theme("colors.green", "currentColor"),
    }),
    fontFamily: {
      mono: ["IBM Plex Mono Regular", "serif"],
      "mono-bold": ["IBM Plex Mono Bold", "serif"],
      "mono-semi-bold": ["IBM Plex Mono Semi Bold", "serif"],
      "mono-thin": ["IBM Plex Mono Thin", "serif"],
      "mono-light": ["IBM Plex Mono Light", "serif"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [],
}
