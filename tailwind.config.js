/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      barlowCondensed: ['Barlow Condensed', 'sans-serif'],
      bellefair: ['Bellefair', 'serif'],
    },
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        primary: '#D0D6F9',
        dark: '#0B0D17',
      },
      backgroundImage: {
        'home-mobile': "url('/src/assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('/src/assets/home/background-home-tablet.jpg')",
        'home-desktop': "url('/src/assets/home/background-home-desktop.jpg')",
        'destination-mobile':
          "url('/src/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet':
          "url('/src/assets/destination/background-destination-tablet.jpg')",
        'destination-desktop':
          "url('/src/assets/destination/background-destination-desktop.jpg')",
        'crew-mobile': "url('/src/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('/src/assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('/src/assets/crew/background-crew-desktop.jpg')",
        'technology-mobile':
          "url('/src/assets/technology/background-technology-mobile.jpg')",
        'technology-tablet':
          "url('/src/assets/technology/background-technology-tablet.jpg')",
        'technology-desktop':
          "url('/src/assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animate')],
}
