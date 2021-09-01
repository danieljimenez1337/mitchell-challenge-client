module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      under: "inset 0px -1px 0px #E7E9EC"
    },
    extend: {
      colors: {
        trasparentGray: "#34445C66",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
