/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
