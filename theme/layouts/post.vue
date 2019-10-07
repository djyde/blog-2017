<template>
  <div>
    <nav>
      <div class="logo">
        <a href="/">Randy's Blog</a>
      </div>
      <div v-for="menu in $themeConfig.menus" class="nav-item">
        <a :href="menu.path">{{ menu.title }}</a>
      </div>
    </nav>
    <div class="cover" :style="{ backgroundImage: `url('${page.cover}')`}"></div>
    <div class="post">
      <h1 class="title">{{ page.title }}</h1>
      <div class="date">{{ dayjs(page.date).format('MMMM DD, YYYY') }}</div>
      <div class="content">
        <slot />
      </div>

      <div class="post-footer">
        <hr />
        <p>讨论请发邮件到 randypriv@gmail.com</p>
        <p>未经授权，禁止转载</p>
        <p>通过支付宝 djyde520@gmail.com 或赞赏码赞助此文</p>
        <p>
          或通过订阅我的
          <a href="/blog/my-zsxq/">知识星球</a>支持本博客
        </p>
        <br />
        <p>
          <img class="bmc" src="//gbstatic.djyde.com/assets/006tKfTcgy1fkuufy2cadj30w00w0tb2.jpg" />
        </p>
      </div>
    </div>

    <div class="footer">
      <p>
        <img width="256px" src="//s2.ax1x.com/2019/04/04/A2V9YT.png" />
      </p>
      <p>
        2014-2019
        <a href="/">Randy's Blog</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page"],
  methods: {
    dayjs: require("dayjs")
  },
  head() {
    return {
      title: `${this.page.title} - Randy's Blog`,
      link: [
        // {
        //   rel: 'stylesheet',
        //   href:
        //     '//ppp.djyde.com/css?family=Noto+Serif+SC" rel="stylesheet'
        // }
      ]
    };
  }
};
</script>

<style scoped>
@import "./styles/prism-dracula.css";

.saber-highlight code {
  font-size: 0.5rem;
}

@custom-media --ipad (480px < width <= 1024px);
@custom-media --iphone (320px <= width < 480px);
@custom-media --pc (width > 1024px);

nav {
  background-color: hsl(0, 0%, 0%);

  .logo {
    padding-left: 1rem;
    margin-right: 2rem;
    display: inline-block;
    a {
      font-weight: bold;
      color: hsl(0, 0%, 100%);
    }
  }

  .nav-item {
    display: inline-block;

    a {
      display: block;
      color: hsl(0, 0%, 100%);
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    a:hover {
      color: hsl(0, 0%, 0%);
      background-color: hsl(0, 0%, 100%);
    }
  }
}

.post-footer {
  padding-top: 2rem;
  text-align: center;
  color: #65737e;
}

.post-footer p {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.bmc {
  max-width: 30% !important;
  @media (--iphone) {
    max-width: 100% !important;
  }
}

.cover {
  padding-bottom: 40%;
  @media (--iphone) {
    padding-bottom: 75%;
  }
  background-size: cover;
}

.post {
  margin-top: 4rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    margin-top: 4rem;
  }

  strong {
    background-color: hsl(0, 0%, 90%);
    color: hsl(0, 0%, 0%);
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }

  .title {
    margin-bottom: 1rem;
  }

  .date {
    color: hsl(0, 0%, 50%);
  }

  @media (--pc) {
    width: 960px;
    margin: 0 auto;
  }

  @media (--iphone) {
    padding-left: 5%;
    padding-right: 5%;
    img {
      width: 100%;
    }
  }

  @media (--ipad) {
    padding-left: 5%;
    padding-right: 5%;
  }

  .content {
    img {
      max-width: 100%;
      display: block;
      margin: 0 auto;

      @media (--ipad) {
        width: 100%;
      }

      @media (--iphone) {
        width: 100%;
      }
    }

    p {
      line-height: 1.8rem;
    }

    a {
      /* color: hsl(0, 0%, 50%); */
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      /* margin-left: .25rem;
      margin-right: .25rem; */
      border-bottom: 0.25rem solid hsl(0, 0%, 10%);
    }

    a:hover {
      background-color: hsl(0, 0%, 0%);
      color: hsl(0, 0%, 100%);
    }
  }
}

.footer {
  text-align: center;
}
</style>