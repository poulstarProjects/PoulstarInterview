/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'paragraph': '#2e2f33',
        'yellow': '#ffcd03',
        'blue': '#395df7',
        'black': '#03050d',
        'black_title': '#2e2f33',
        'gray': '#5c5f66',
        'gray_normal': '#838691',
        'gray_medium': '#8a8e99',
        'gray_light': '#dae0f2',
        'red': '#ed1c25',
        'green': '#00c6a5'
      },
      lineHeight: {
        'paragraph': '30px'
      },
      padding: {
        'default': '30px',
      },
      borderRadius: {
        'default': '20px'
      },
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))'
      },
      boxShadow: {
        'default': '0 3px 30px 0 rgba(0, 0, 0, 0.15)',
        'switch': '0 3px 10px 0 rgba(0, 0, 0, 0.16)'
      },
      fontFamily: {
        yekan: "Yekan",
        hodhod: "Hodhod",
      },
    },
    screens: {
      'mobile': "640px",
      'tablet': "960px",
      'desktop': "1280px",
    },
    container: {
      center: true,
      screens: {
        mobile: "600px",
        tablet: "900px",
        desktop: "1170px",
      },
    }
  },
  plugins: [],
}
