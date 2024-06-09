/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "744px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      text: "#2f151e",
      primary: "#451E2C",
      secondary: "#007678",
      accent: "#CF9EAC",
      background: " #DDD7C6",
    },
    fontSize: {
      sm: ["16px", { fontWeight: "400" }],
      md: ["20px", { fontWeight: "400" }],
      "md-bold": ["20px", { fontWeight: "700" }],
      lg: ["30px", { fontWeight: "400" }],
      "lg-bold": ["30", { fontWeight: "700" }],
      xl: ["35px"],
      "2xl": ["40px", { fontWeight: "700" }],
      "3xl": ["55px", { fontWeight: "700" }],
      "4xl": ["64px", { fontWeight: "700" }],
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        cormorant: ["Cormorant", "serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
