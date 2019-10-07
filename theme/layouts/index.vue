<template>
  <div>
    <header>
      <div class="big-pic">
        <div class="slogan">
          <div class="slogan-title">Randy's Blog</div>
          <div class="slogan-desc">about tech, life, music and reading</div>
        </div>
      </div>
    </header>
    <div class="container">
      <div>
        <div
          class="bio"
        >My name is Randy Lu (卢涛南). I was born in 1995 and I'd been coding since my 13. I used C, PHP, Python, JavaScript. But now I focus on JavaScript and currently work at Alibaba Inc.</div>
        <!-- <section class="nav">
          <template v-for="menu in $themeConfig.menus">
            <div>
              <a :href="menu.path">{{ menu.title }}</a>
            </div>
          </template>
        </section>-->
      </div>

      <div v-for="(val, key) in postsByGroup">
        <span class="category-name">{{ key }}</span>
        <div class="posts-list">
          <div class="post-item" v-for="post in val">
            <div class="date">{{ dayjs(post.date).format('MMMM DD, YYYY') }}</div>
            <div class="cover" :style="{ backgroundImage: `url('${post.cover}')`}"></div>
            <h2>
              <a :href="post.permalink">{{ post.title }}</a>
            </h2>
          </div>
        </div>
      </div>
    </div>

    <!-- <footer>Randy's Blog</footer> -->
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: ["page"],
  injectAllPosts: true,
  methods: {
    dayjs: require("dayjs")
  },
  data() {
    const categories = ['Thinking', 'Others']

    const postsByGroup = _(this.page.posts)
      .groupBy(p => p.categories ? p.categories[0] : "Others")
      .value()

      const sorted = {}

    categories.forEach(c => {
      sorted[c] = postsByGroup[c]
    })

    return {
      postsByGroup: sorted
    };
  },
  head: {
    title: `Randy's Blog`
  },
  mounted() {
    console.log(this.page.posts);
  }
};
</script>

<style scoped>
/* header {
  background-color: hsl(0, 0, 20);
  height: 120px;
} */

@custom-media --ipad (480px < width <= 1024px);
@custom-media --iphone (320px <= width < 480px);
@custom-media --pc (width > 1024px);

.container {
  box-sizing: border-box;

  @media (--pc) {
    width: 960px;
    margin: 0 auto;
  }

  @media (--ipad) {
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
  }

  @media (--iphone) {
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
  }
}

.bio {
  margin-top: 4rem;
  padding-bottom: 4rem;
  font-size: 1.4rem;
}

.big-pic {
  position: relative;
  padding-bottom: 43.5%;
  @media (--iphone) {
    padding-bottom: 75%;
  }
  background-size: cover;
  background-position-x: 0rem;
  background-position-y: 75%;
  background-repeat: no-repeat;
  background-image: url("https://gbstatic.djyde.com/assets/Snapseed%203.jpg?x-oss-process=image/auto-orient,1/quality,q_80/bright,-10/resize,w_2560/contrast,-30/interlace,1");
}

.slogan {
  padding-left: 10%;
  position: absolute;
  top: 50%;
  text-shadow: 3px 2px 0px #7a7a7a;

  .slogan-title {
    font-weight: bold;
    color: hsl(0, 0%, 100%);
    font-size: 4rem;

    @media (--pc) {
      font-size: 8rem;
    }

    @media (--iphone) {
      font-size: 3rem;
    }
  }

  .slogan-desc {
    font-size: 2rem;
    color: hsl(0, 0%, 100%);

    @media (--pc) {
      font-size: 4rem;
    }

    @media (--iphone) {
    }
  }
}

@lost flexbox flex;

.nav {
  lost-utility: cleafix;
  margin-top: 4rem;
  padding-bottom: 2rem;
  lost-flex-container: row;
  div {
    lost-column: 1/6;
    border-bottom: 1rem solid hsl(0, 0%, 50%);
    transition: all 0.2s;

    &.active {
      border-bottom: 1rem solid hsl(0, 0%, 10%);
    }

    &:hover {
      border-bottom: 1rem solid hsl(0, 0%, 10%);
    }

    a {
      font-size: 2rem;
    }
  }
}

.category-name {
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 1rem solid hsl(0, 0%, 10%);
  display: inline-block;
  margin-bottom: 1rem;
}

.posts-list {
  lost-utility: cleafix;
  lost-flex-container: row;

  @media (--pc) {
    .post-item {
      lost-column: 1/3;
    }
  }

  @media (--ipad) {
    .post-item {
      lost-column: 1/3;
    }
  }

  @media (--iphone) {
    .post-item {
      width: 100%;
    }
  }

  .post-item {
    margin-bottom: 2.4rem;

    .cover {
      min-width: 100%;
      padding-bottom: 75%;
      background-color: hsl(0, 0%, 90%);
      background-size: cover;
      background-position: center;
    }

    h2 {
      margin: 0;
      margin-top: 0.5rem;
      font-weight: bold;
      font-size: 1.2rem;
    }

    .date {
      color: hsl(0, 0%, 50%);
      font-weight: lighter;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  }
}
</style>