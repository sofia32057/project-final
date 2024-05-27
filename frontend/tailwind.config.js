/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "744px",
      lg: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
