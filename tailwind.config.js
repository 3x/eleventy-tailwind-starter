module.exports = {
  purge: [ // Scan all content under `_src/`
    './_src/*',
    './_src/**/*',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
