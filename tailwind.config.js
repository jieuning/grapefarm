/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#333333',
        point: '#8842FF',
        grape: {
          deep: '#543787',
          dark: '#754EAB',
          normal: '#9366CD',
          light: '#F0E8FF',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-indent-hide': {
          textIndent: '-9999px',
        },
        '.li-divider': {
          position: 'relative',
        },
        '.li-divider::after': {
          content: '""',
          position: 'absolute',
          right: '-10px',
          top: '50%',
          transform: 'translateY(-50%)',
          height: '28px',
          width: '1px',
          backgroundColor: '#E8DCFF',
        },
      })
    },
  ],
}
