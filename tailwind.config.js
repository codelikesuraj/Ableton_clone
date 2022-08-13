/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        "my_yellow" : "#fbffa7",
        "my_l_blue" : "#b1c5ff",
        "my_green" : "#b6ffc0",
        "my_peach" : "#ff764d",
        "my_purple" : "#d5b3ff",
        "my_d_blue" : "#0000ff"
      },
      fontFamily: {
        'futura': ['futura', 'monospace'] 
      },
    },
  },
  plugins: [],
}
