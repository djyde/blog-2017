module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-import': {},
    'lost': {},
    'postcss-preset-env': {
      stage: 0,
      browsers: 'last 2 versions'
    },
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