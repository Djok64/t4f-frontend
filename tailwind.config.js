/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], // Cela couvre tout ton code source
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // exemple de couleur primaire personnalisée
      },
    },
  },
  plugins: [],
}
