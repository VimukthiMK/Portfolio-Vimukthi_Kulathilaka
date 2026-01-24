/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["var(--font-outfit)"],
        Ovo: ["var(--font-ovo)"],
      },
      colors: {
        darkTheme: "#0f172a",
        darkHover: "#1e293b",
      },
    },
  },
  plugins: [],
};

