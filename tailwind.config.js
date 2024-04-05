/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'black':'#000000',
      'white':'#ffffff',
      'light-blue':'#f5f7ff',
      'pale-purple': '#584dd7',
      'purple': '#3829e0',
      'very-pale-blue': '#e0e8ff',
      'desaturated-blue': '#7280a7',
      'dark-blue': '#1f2f56',
      'dark-purple':'#3829e0',
      'white-purple':'#675dd5',
    },
    extend: {
      backgroundImage: {
        'pattern-desktop': 'url(/public/pattern-background-desktop.svg)',
      },
    },
  },
  plugins: [],
};
