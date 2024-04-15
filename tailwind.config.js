/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'contessa': {
          '50': '#fbf6f5',
          '100': '#f6ecea',
          '200': '#f0dcd8',
          '300': '#e4c3bd',
          '400': '#d3a096',
          '500': '#ba7264',
          '600': '#aa6558',
          '700': '#8e5347',
          '800': '#77463d',
          '900': '#643f38',
          '950': '#351e1a',
        },
        'porsche': {
          '50': '#fdf9ef',
          '100': '#fbf0d9',
          '200': '#f5deb3',
          '300': '#efc882',
          '400': '#eab265',
          '500': '#e18e2e',
          '600': '#d37623',
          '700': '#af5c1f',
          '800': '#8c4920',
          '900': '#713d1d',
          '950': '#3d1e0d',
        },
      
      },
      height: {
        '128': '32rem',
      },
      fontFamily: { 
        'jersey': ['"Jersey 10 Charted"', 'sans-serif'] 
      } 
    },
  },
  plugins: [],
}

