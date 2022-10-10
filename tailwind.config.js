/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        full: "92vh",
        80 : "51rem",
        31 : "31rem"
      },
      width: {
        100: "22rem",
        57 : "32rem"
      },
      fontFamily: {
        'quicksand': ['"Quicksand"', 'cursive'],
      },
      colors: {
        'regal-green' : '#0BA01A',
        'min-gray' : '#4E4E4E',
        'light-green' :  '#00D215'

      }
    },
  },
  plugins: [],
};
