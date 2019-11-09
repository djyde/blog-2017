module.exports = {
  plugins: [{
      resolve: 'saber-plugin-query-posts',
      options: {
        perPage: 100
      }
    },
    {
      resolve: 'saber-plugin-prismjs'
    },
    {
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: 'rss.xml',
        limit: 100,
      }
    },
    {
      resolve: 'saber-plugin-google-analytics',
      options: {
        trackId: 'UA-72147868-2'
      }
    }
  ],
  siteConfig: {
    url: 'https://lutaonan.com',
    author: 'Randy',
    email: 'randypriv@gmail.com'
  },
  theme: './theme',
  themeConfig: {
    navs: [{
        title: '寫作',
        alias: 'writings',
        url: '/'
      },
      {
        title: '我讀',
        alias: 'readings',
        url: '/readings'
      },
      {
        title: '音樂',
        alias: 'music',
        url: '/music'
      }, {
        title: '攝影',
        alias: 'photograph',
        url: '/photograph'
      }, {
        title: '關於我',
        alias: 'about',
        url: '/about'
      }
    ],
    avatar: 'https://gbstatic.djyde.com/assets/Snapseed%203.jpg?x-oss-process=image/auto-orient,1/quality,q_80/bright,-10/resize,w_2560/contrast,-30/interlace,1',
    bio: `
    <h2>Randy's Blog</h2>
    <p>My name is Randy Lu (卢涛南). I was born in 1995 and I'd been coding since my 13. I used C, PHP, Python, JavaScript. But now I focus on JavaScript and currently work at Alibaba Inc.</p>
    <p>In my blog, I will share my ideas, my lifestyle, and my <a class="big" href="/readings">readings</a>. Or know more <a class="big" href="/about">About me</a>.
    <p>You could also watch my videos (music) on <a class="big" target="_blank" href="https://www.youtube.com/channel/UCFQUVJ0_ZGzvuX6GHl_cqsQ">YouTube</a> or <a target="_blank" class="big" href="https://space.bilibili.com/20931693">Bilibili</a>.</p>
    <p><a class="big" href="https://t.me/s/randythoughts">Big Tweets</a></p>
    <p><a class="big" href="/rss.xml">RSS</a></p>
    `,
    contacts: [{
        "className": "twitter",
        "href": "https://twitter.com/randyloop",
        "title": "@randyloop"
      },
      {
        "className": "weibo",
        "href": "http://weibo.com/djyde",
        "title": "@米斯特软的"
      },
      {
        "className": "zhihu",
        "href": "https://zhihu.com/people/djyde",
        "title": "卢涛南"
      },
      {
        "className": "github",
        "href": "https://github.com/djyde",
        "title": "djyde"
      },
      {
        "className": "medium",
        "href": "https://medium.com/@djyde",
        "title": "@djyde"
      },
      {
        "className": "email",
        "href": "mailto:randypriv@gmail.com",
        "title": "randypriv at gmail"
      },
      {
        "className": "telegram",
        "href": "https://t.me/djyde",
        "title": "@djyde"
      }
    ],
    menus: [{
      title: 'Readings',
      path: '/readings'
    }, ],
    categories: [{
        name: 'Newest',
        title: '最新'
      },
      {
        name: 'Thinking',
        title: '思考'
      },
      {
        name: 'Coding',
        title: '编程'
      },
      {
        name: 'Life',
        title: '生活'
      },
      {
        name: 'Reviews',
        title: '评测'
      },
      {
        name: 'Others',
        title: '其它'
      }
    ],
    books: [{
      name: '影响我最多的书',
      items: [{
          title: '世界因你不同',
          buyLink: '/link/book-shijieyinnibutong',
          cover: 'https://gbstatic.djyde.com/blog/s3961188.jpg?x-oss-process=style/cover',
          douban: 'https://book.douban.com/subject/4010196/',
          desc: `<p>我在初中时读了李开复的自传《世界因你不同》，书中讲述了李开复从幼年被送到美国求学，直至在 IBM, Apple, Google 工作的经历。</p>
          <p>在这本书里我第一次感受到中美之间的文化差异，虽然只透过书本感受未免过于浅薄，但李开复的经历让我发现人生充满各种可能性。「价值不是你拥有多少，而是你留下多少」，我应该尽可能做更多为世界创造价值的事，以免在世间白活一场。而编程对我来说是最有效的创造价值的手段。</p>
          `
        },
        {
          title: '零下一度',
          buyLink: '/link/book-lingxiayidu',
          cover: 'https://gbstatic.djyde.com/blog/s1028954.jpg?x-oss-process=style/cover',
          douban: 'https://book.douban.com/subject/1034108/',
          desc: `<p>当韩寒还是个写作者的时候，我受他影响很大。从早期的文学作品，到后期的博客杂文，我都一篇不漏地读。</p>
<p>《零下一度》是我姐姐很早以前买的，放在书柜被我无意中拿出来读了。初读时也是初中，我对文学本无感，但看过《零下一度》，我深深被文学吸引。因为这本书，我认识了李敖，认识了梁实秋，认识了钱钟书，等等等等。这本书引我进入了文学的门。从此我开始大量地从学校图书馆借很多民国的文学作品来读。</p>
<p>也是这本书让我开始意识到人应该要有独立思考的能力，即使因为阅历所限，思考的深度也有限，甚至在日后看来是幼稚,但总比不思考要好得多。</p>

<p>记得读完这本书后，我也开始写一些短篇小说，还给《少年文艺》投过稿。</p>
          `
        },
        {
          title: '月亮与六便士',
          cover: 'https://gbstatic.djyde.com/assets/s2659208.jpg?x-oss-process=style/cover'
        },
        {
          title: '刀锋',
          cover: 'https://gbstatic.djyde.com/assets/s2347562.jpg?x-oss-process=style/cover',
          desc: `<p>《刀锋》是我读毛姆的第二本书，也是我接触宗教和哲学的开始。主人公拉里因为战时同伴的死亡而到印度寻找答案，他的经历使我得以从一个全新的角度去思考人生和爱情观。</p>`
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