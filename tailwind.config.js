/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fbf5fc',
          100: '#f6eaf8',
          200: '#edd5f2',
          300: '#dfb5e6',
          400: '#cb8ad5',
          500: '#b262c0',
          600: '#9444a2',
          700: '#793484',
          800: '#642b6c',
          900: '#4A1259', // Primary Figma Plum
          950: '#320b3d',
        },
        gold: {
          500: '#f5a623',
          600: '#d4a017',
          700: '#b8860b',
        },
        sale: '#5cb85c',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
        },
      },
    },
  },
  plugins: [],
}

