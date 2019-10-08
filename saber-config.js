module.exports = {
  plugins: [
    {
      resolve: 'saber-plugin-query-posts',
      options: {
        perPage: 100
      }
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
    ],
    categories: [
      { name: 'Newest' },
      { name: 'Thinking' },
      { name: 'Coding' },
      { name: 'Life' },
      { name: 'Reviews' },
      { name: 'Others' }
    ]
  },
  permalinks: () => {
    return {
      post: '/blog/:slug'
    }
  }
}