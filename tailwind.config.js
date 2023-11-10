/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(236, 21%, 26%)',
        primary: 'hsl(237, 18%, 59%)',
        secondary: 'hsl(345, 95%, 68%)',
        tertiary: 'hsl(235, 16%, 14%)',
        'tertiary-dark': 'hsl(234, 17%, 12%)',
        text: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'redhat': ['Red Hat Text']
      },
    },
  },
  plugins: [],
}
