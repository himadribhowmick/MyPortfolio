/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ enables dark mode via class (toggle with .dark)
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ include all React files
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#ff6600",
          dark: "#e25500",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
