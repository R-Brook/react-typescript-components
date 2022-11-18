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
      mono: ['"Courier New"', "monospace"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [],
}
