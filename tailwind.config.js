/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['grid', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6'],
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
          sm: '600px',
          md: '728px',
          lg: '950px',
          xl: '1472px',
          '2xl': '1440px'
        }
      },
      colors: {
        'white-60': 'rgba(255, 255, 255, 0.6)',
        'gray-249': 'rgb(249, 249, 249)',
        'gray-51': 'rgb(51, 51, 51)',
        'gray-238': 'rgb(238, 238, 238)',
        'gray-233': 'rgb(233, 233, 233)',
        'gray-102': 'rgb(102, 102, 102)',
        'gray-204': 'rgb(204, 204, 204)',
        'blue-custom': 'rgb(51, 153, 204)',
        'red-custom': 'rgb(239, 84, 44)',
        'green-custom': 'rgb(119, 192, 84)',
        'green-128-188-48': 'rgb(128, 188, 48)'
      },
      whiteSpace: {
        normal: 'normal'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
