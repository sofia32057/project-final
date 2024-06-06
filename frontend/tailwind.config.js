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
    // colors: {},
    fontSize: {
      sm: ["16px", { fontWeight: "400" }],
      md: ["20px", { fontWeight: "400" }],
      "md-bold": ["20px", { fontWeight: "700" }],
      lg: ["30px", { fontWeight: "400" }],
      "lg-bold": ["30", { fontWeight: "700" }],
      xl: ["35px", { fontWeight: "700" }],
      "2xl": ["40px", { fontWeight: "700" }],
      "3xl": ["55px", { fontWeight: "700" }],
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
