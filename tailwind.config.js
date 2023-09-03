/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1E2D66",
        secondary: "#A2EB83",
        accent: "#8B4513",
        black: "#3c3c3c",
        cream: "#FAF3DC",
        tpCream: "rgba(244, 237, 215, 0.87)",
        primaryBlur: "rgba(30, 45, 102, 0.10)",
        secondaryBlur: "rgba(162, 235, 131, 0.07)",
        blackBlur : "rgba(60, 60, 60, 0.5)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'custom-shadow': '0px 10px 10px 0px rgba(0, 0, 0, 0.20)'
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
