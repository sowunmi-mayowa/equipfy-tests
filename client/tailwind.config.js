/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '375px',
      'xs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        aeonik: "Aeonik Medium",
        plex: "IBM Plex Sans"
      },
      colors:{
        eBlack: "#121212",
        eYellow: "#FDCF0B"
      }
    },
  },
  plugins: [],
}

