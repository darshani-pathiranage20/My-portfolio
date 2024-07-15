/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        arvo: ['Arvo', 'sans-serif'],
      },
      height: {
        projet: ['22rem']
      }
    },
  },
  plugins: [],
}

