module.exports = {
  purge:{
    enabled: true,
    content : ["./dist/**/*.html"]
  },
  darkMode: 'class',
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
