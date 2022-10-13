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
        57 : "32rem",
        "console-sidebar": "296px"
      },
      fontFamily: {
        'quicksand': ['"Quicksand"', 'cursive'],
      },
      colors: {
        'regal-green' : '#0BA01A',
        'min-gray' : '#4E4E4E',
        'light-green' :  '#00D215',
        // 'soft-green' : '#0ba01a1a'

      },
      backgroundImage: {
        'dekstop-display': "url('./src/assets/display.png')"
      }
    },
  },
  plugins: [],
};
