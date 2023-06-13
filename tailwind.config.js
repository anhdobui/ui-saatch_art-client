/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'crimson-text': ['Crimson Text', 'serif'],
        'helvetica-text': ['Helvetica', 'serif']
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1472px' // Thay đổi giá trị container thành 1200px
        }
      },
      colors: {
        'white-60': 'rgba(255, 255, 255, 0.6)',
        'gray-249': 'rgb(249, 249, 249)',
        'gray-51': 'rgb(51, 51, 51)',
        'gray-233': 'rgb(233, 233, 233)'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
