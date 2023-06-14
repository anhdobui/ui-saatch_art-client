/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'crimson-text': ['Crimson Text', 'serif'],
        'helvetica-text': ['Helvetica', 'serif']
      },
      flex: {
        '1-1-0': '1 1 0%'
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
        'gray-233': 'rgb(233, 233, 233)',
        'gray-102': 'rgb(102, 102, 102)',
        'gray-204': 'rgb(204, 204, 204)',
        'blue-custom': 'rgb(51, 153, 204)',
        'red-custom': 'rgb(239, 84, 44)',
        'green-custom': 'rgb(119, 192, 84)'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
