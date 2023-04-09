/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
    },
    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: ['bounce', 'heartBeat'],
    },
    fontFamily: {
      sans: ['poppins'],
    },
  },
  plugins: [require('tailwindcss-animate')],
  darkMode: 'class',
};
