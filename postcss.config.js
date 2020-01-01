const mdColors = require('@egoist/md-colors')

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('tailwindcss')({
      theme: {
        // Override default colors
        colors: {
          transparent: 'transparent',
          ...mdColors
        }
      }
    })
  ]
}