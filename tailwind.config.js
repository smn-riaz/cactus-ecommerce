/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px'
    },
    container:{
      center: true,
      padding:'1rem'
    },
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'robota':['Roboto', 'sans-serif']
      },
      colors:{
        'primary':'green',
      },
    },
    
  },
  
  plugins: [],
}