/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'mate-green': '#61892F',
        'shine-green': '#86C232',
        'mate-black': '#222629',
        'shine-gray': '#474B4F',
        'mate-gray': '#6B6E70',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
