/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans-khmer': ['Noto Sans Khmer', 'sans-serif'],
        'noto-serif-khmer': ['Noto Serif Khmer', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'roboto': ['Roboto', 'sans-serif'],
        'varela-round': ['Varela Round', 'sans-serif'],
      },
      colors: {
        dark:'#030637',
        darks:'rgba(96, 96, 96, 0.65)',
        primary: '#4A90E2',     // Blue
        secondary: '#50E3C2',   // Turquoise
        danger:'#FFAF00',
        accent: {
          DEFAULT: '#F39C12',   // Orange
          light: '#FABE4B',     // Lighter Orange
          dark: '#C87E0B',      // Darker Orange
          darker: '#A66108',    // Even Darker Orange
        },
        neutral: {
          100: '#FFFFFF',       // White
          200: '#F0F0F0',       // Light Gray
          900: '#2C3E50',       // Dark Gray
        },
        blue: 'rgba(0,0,0,0.5)',
      },
      boxShadow:{
        boxx:'-2px 2px 15px rgba(0,0,0,0.6)',
      }
    },
  },
  plugins: [],
}