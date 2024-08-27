/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        garamond: ["EB Garamond", "serif"]
      },
      colors: {

        titleprimary: "#ac7a4f",
        titlesecondary: "#603F26"
      }
    },
  },
  plugins: [],
}

