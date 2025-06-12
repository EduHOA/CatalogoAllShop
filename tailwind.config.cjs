/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zing: ['Zing Rust Base', 'sans-serif'],
      },
      colors: {
        primary: '#a0cc1f', // Verde
        dark: '#052c33',    // Azul escuro
        white: '#ffffff',   // Branco
        black: '#000000',   // Preto
      },
    },
  },
  plugins: [],
} 