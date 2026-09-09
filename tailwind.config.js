/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Control-room ink — cool navy-black, never flat #0B0B0B
        ink: {
          50: '#f4f5f7',
          100: '#e6e8ec',
          200: '#cdd2da',
          300: '#a8b0bd',
          400: '#7c8697',
          500: '#5d6779',
          600: '#48505f',
          700: '#3a4150',
          800: '#232a38',
          900: '#151b27',
          950: '#0c1118',
        },
        // Single signal accent — ops/wayfinding amber
        signal: {
          300: '#ffd27a',
          400: '#fbbf3c',
          500: '#f5a524',
          600: '#d88a10',
        },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
