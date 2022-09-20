/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        amarelo1: '#ffbf31',
        amarelo2: '#efa903',
        azul1: '#006ec7',
        azul2: '#0033ab',
        azul3: '#00247d',
        preto: '#101010',
        branco: '#fdfdfd',
      },
    },
  },
  plugins: [],
};
