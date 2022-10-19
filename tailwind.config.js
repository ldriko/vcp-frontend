/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        full: "92vh",
        80 : "51rem",
        31 : "31rem",
        78 : "20rem",
      },
      width: {
        100: "22rem",
        57 : "32rem",
        71 : "65rem",
        30 : "30rem",
        "console-sidebar": "296px"
      },
      fontFamily: {
        'quicksand': ['"Quicksand"', 'cursive'],
      },
      colors: {
        'regal-green' : '#0BA01A',
        'min-gray' : '#4E4E4E',
        'light-green' :  '#00D215',
        'soft-green' : '#D0ECD3',
        'almost-green' : '#2AAB38',
        'gray-green' : '#E6F5E8',
        'light-gray' : '#F8F8F8',
        'almost-gray' : '#EEEEEE',
        'litle-gray'  : '#CFCFCF'
      },
      backgroundImage: {
        'dekstop-display': "url('./src/assets/display.png')"
      }
    },
  },
  plugins: [],
};
