/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        aniblue: '#97DFFC',
        aniviolet1: '#858AE3',
        aniviolet2: '#613DC1',
        aniviolet3: '#4E148C',
        aniviolet4: '#2C0735',
      },
      backgroundImage: {
        'radial-gradient-r':
          'radial-gradient(50% 50% at 58.23% 50%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.6) 100%)',
      },
    },
  },
  plugins: [],
};
