export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Use system fonts to avoid remote font requests
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        charcoal: '#121212',
        deepgray: '#1A1A1A',
        platinum: '#999999',
        silver: '#bfbfbf',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};
