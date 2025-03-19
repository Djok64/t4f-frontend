/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], // Cela couvre tout ton code source
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // exemple de couleur primaire personnalisée
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
