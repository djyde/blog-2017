module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-import': {},
    'lost': {},
    'postcss-nested': {
      stage: 1,
      browsers: [
        "ie > 8",
        "last 2 versions"
      ]
    },
    'postcss-nested': {}
  }
}