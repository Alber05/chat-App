/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-black': '#111827',
        'custom-green-emerald': '#23CE6B',
        'custom-vivid-blue': '#59d2fe',
        'custom-green-teal': '#0E7C7B',
        'custom-savoy-blue': '#5158bb',
        'custom-baby-powder': '#F7F7F9',
        'custom-gray': '#f8f1ff'
      },
      textShadow: {
        // Sombras personalizadas para texto
        default: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Sombra suave
        md: '3px 3px 6px rgba(0, 0, 0, 0.4)', // Sombra media
        lg: '4px 4px 8px rgba(0, 0, 0, 0.5)', // Sombra más fuerte
        xl: '5px 5px 10px rgba(0, 0, 0, 0.6)', // Sombra extra fuerte
        neon: '0 0 10px rgba(0, 255, 0, 0.8)' // Sombra tipo neón (verde)
      },
      backgroundImage: {
        'home-bg':
          "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('./public/images/home-bg.jpg')",
        'register-bg':
          "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('./public/images/sign-up.jpg')",
        'login-bg':
          "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('./public/images/sign-in.jpg')"
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-shadow': {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          },
          '.text-shadow-md': {
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)'
          },
          '.text-shadow-lg': {
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)'
          },
          '.text-shadow-xl': {
            textShadow: '5px 5px 10px rgba(0, 0, 0, 0.6)'
          },
          '.text-shadow-neon': {
            textShadow: '0 0 10px rgba(0, 255, 0, 0.8)'
          }
        },
        ['responsive', 'hover']
      )
    }
  ]
}
