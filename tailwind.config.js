/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      navbar: '900px',
      phone: "640px"
    },
    extend: {
      fontFamily: {
        primaryRegular: ["Regular"],
        primaryBold: ["Bold"],
        primaryLight: ["Light"],
        primaryExtraLight: ["ExtraLight"],
        primaryExtraBold: ["ExtraBold"],
        primaryMedium: ["Medium"],
        primarySemiBold: ["SemiBold"]
      },
      colors: {
        primaryRed: "#fa0f00",
        primaryNav: "#fafafa",
        bluePriamry: "#1473e6"
      }
    },
  },
  plugins: [],
}