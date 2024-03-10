module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  presets: [require('./utils/tailwind-preset')],
  theme: {
    extend: {
      fontFamily: {
        violet: ['Violet Sans'],
        clash: ['Clash Grotesk'],
        belgro: ['Belgro'],
        blair: ['Blair']
      },
      colors: {
        primary: '#31304F',
        secondary: '#084C9F',
        green: '#23C399'
      }
    }
  }
};
