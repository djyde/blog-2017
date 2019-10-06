module.exports = {
  plugins: [
    {
      resolve: 'saber-plugin-query-posts'
    }
  ],
  theme: './theme',
  permalinks: () => {
    return {
      post: '/blog/:slug'
    }
  }
}
