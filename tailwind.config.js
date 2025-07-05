export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia'],
      },
      colors: {
        primary: {
          400: '#4f9dbb',
          500: '#2d8aac',
          600: '#197189',
        },
        silver: {
          400: '#999999',
          500: '#adadad',
          600: '#bfbfbf',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};
