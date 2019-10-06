module.exports = {
  plugins: [
    {
      resolve: 'saber-plugin-query-posts'
    },
    {
      resolve: 'saber-plugin-prismjs'
    }
  ],
  theme: './theme',
  themeConfig: {
    menus: [
      { title: 'Posts', path: '/' },
      { title: 'Readings', path: '/readings' },
      { title: 'Music', path: '/music' },
      { title: 'About Me', path: '/about' },
    ]
  },
  permalinks: () => {
    return {
      post: '/blog/:slug'
    }
  }
}
