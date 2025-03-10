/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",               // Si usas HTML en la raíz
    "./src/**/*.{html,js,jsx,ts,tsx}", // Si usas React, Vite o archivos en `src`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
