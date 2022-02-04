module.exports = {
  content: [],
  theme: {
    debugScreens:{
      position:['top','left']
    },
    extend: {
      fontFamily:{
        headline: ['Oswald']
      },
      colors:{
        mainColor:'#212f29'
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
