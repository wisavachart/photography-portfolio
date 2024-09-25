/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "3/4": "3 / 4",
      },
      fontFamily: {
        popfun: ["Popfun", "sans-serif"],
        andersonR: ["AndersonGrotesk", "sans-serif"],
        andersonL: ["AndersonGroteskLightOblique", "sans-serif"],
        andersonB: ["AndersonGroteskBold", "sans-serif"],
      },
      colors: {
        yzz_blue: "#0E4194",
        yzz_green: "#25F09C",
      },
      screens: {
        max_mb: "640px",
        desktop: "1300px",
      },
    },
  },
  plugins: [],
};
