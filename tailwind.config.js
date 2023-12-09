/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#64748b",
        ig: "#E4405F",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
