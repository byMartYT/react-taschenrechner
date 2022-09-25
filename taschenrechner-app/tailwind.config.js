/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'input': '#333A4D',
      'cyan': '#155e75',
      'blue': '#3b82f6',
      'white': '#fff',
      'hitpink': '#FF9E71',
      'salmon': '#FD826E',
      'iron': '#CCCCCC',
      'w2': '#EEEEEE',
      'gray': '#9ca3af',
    },
    extend: {
    },
  },
  plugins: [require("daisyui")],
}
