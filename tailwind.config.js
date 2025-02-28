/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: 'hsl(4, 100%, 67%)',
          orange: 'hsl(29, 100%, 50%)'
        },
        neutral: {
          blue: {
            800: 'hsl(234, 29%, 20%)',
            700: 'hsl(235, 18%, 26%)',
          },
          grey: 'hsl(0, 0%, 58%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
        fontSize: '16px',
      },
      screens: {
        'small': { 'max': '640px' }, 
        'medium': { 'max': '960px' }, 
        'large': { 'max': '1024px' }, 
      },
    },
  },
  plugins: [],
};
