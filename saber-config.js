module.exports = {
  plugins: [{
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
    menus: [{
        title: 'Posts',
        path: '/'
      },
      {
        title: 'Readings',
        path: '/readings'
      },
      {
        title: 'Music',
        path: '/music'
      },
      {
        title: 'About Me',
        path: '/about'
      },
    ],
    categories: [{
        name: 'Newest'
      },
      {
        name: 'Thinking'
      },
      {
        name: 'Coding'
      },
      {
        name: 'Life'
      },
      {
        name: 'Reviews'
      },
      {
        name: 'Others'
      }
    ],
    books: [{
      name: '影响我最多的书',
      items: [
        {
          title: '世界因你不同',
          buyLink: 'https://union-click.jd.com/jdc?e=&p=AyIGZRtYFAcXBFIZWR0yEgdTG10UBxc3EUQDS10iXhBeGlcJDBkNXg9JHU4YDk5ER1xOGRNLGEEcVV8BXURFUFdfC0RVU1JRUy1OVxUCFAdTGl4QMlBaBm4HbVdrZVZTC252ZHRUeRkcVGILWStaJQITBlUeXRUEFANlK1sSMkBpja3tzaejG4Gx1MCKhTdUK1sRBBMAVBxaEgoVA1ErXBULIlIOUw5BBhEGZStrFjIiN1UrWCVAfAcGGl0SVkFXV0sPHAdCVVRLXUEDRgFUTlkdAkUHU0tTJQATBlES',
          cover: 'https://gbstatic.djyde.com/blog/s3961188.jpg?x-oss-process=style/cover',
          douban: 'https://book.douban.com/subject/4010196/',
          desc: `<p>我在初中时读了李开复的自传《世界因你不同》，书中讲述了李开复从幼年被送到美国求学，直至在 IBM, Apple, Google 工作的经历。</p>
          <p>在这本书里我第一次感受到中美之间的文化差异，虽然只透过书本感受未免过于浅薄，但李开复的经历让我发现人生充满各种可能性。「价值不是你拥有多少，而是你留下多少」，我应该尽可能做更多为世界创造价值的事，以免在世间白活一场。而编程对我来说是最有效的创造价值的手段。</p>
          `
        },
        {
          title: '零下一度',
          cover: 'https://gbstatic.djyde.com/blog/s1028954.jpg?x-oss-process=style/cover',
          douban: 'https://book.douban.com/subject/1034108/',
          desc: `<p>当韩寒还是个写作者的时候，我受他影响很大。从早期的文学作品，到后期的博客杂文，我都一篇不漏地读。</p>
<p>《零下一度》是我姐姐很早以前买的，放在书柜被我无意中拿出来读了。初读时也是初中，我对文学本无感，但看过《零下一度》，我深深被文学吸引。因为这本书，我认识了李敖，认识了梁实秋，认识了钱钟书，等等等等。这本书引我进入了文学的门。从此我开始大量地从学校图书馆借很多民国的文学作品来读。</p>
<p>也是这本书让我开始意识到人应该要有独立思考的能力，即使因为阅历所限，思考的深度也有限，甚至在日后看来是幼稚,但总比不思考要好得多。</p>

<p>记得读完这本书后，我也开始写一些短篇小说，还给《少年文艺》投过稿。</p>
          `
        }
      ]
    }]
  },
  permalinks: () => {
    return {
      post: '/blog/:slug'
    }
  }
}