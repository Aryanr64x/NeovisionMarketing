
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#00C7C9',
        secondary: '#404B5A'
      }, 
      fontFamily:{
        nunito: ['Nunito', 'sans-serif'],
        paytone: ['Paytone One', 'cursive'],
      }
    },
  },
  plugins: [],
}
