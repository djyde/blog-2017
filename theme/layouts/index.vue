<template>
  <div>
    <div class="container">
      <div>
        <div style="text-align: center;">
          <div class="avatar" />
        </div>
        <div v-html="$themeConfig.bio" class="bio"></div>
      </div>
      <h2 class="hr">
        <span>Featured</span>
      </h2>
      <div class="posts">
        <div v-for="post in postsByGroup.featured">
          <div class="post-title">
            <a :href="post.permalink">{{ post.title }}</a>
            <span class="post-date">({{ dayjs(post.date).format('MMM DD, YYYY') }})</span>
          </div>
        </div>
      </div>
      <h2 class="hr">
        <span>Posts</span>
      </h2>
      <div class="posts">
        <div v-for="post in postsByGroup.others">
          <div class="post-title">
            <a :href="post.permalink">{{ post.title }}</a>
            <span class="post-date">({{ dayjs(post.date).format('MMM DD, YYYY') }})</span>
          </div>
        </div>
      </div>
      <div>
        <h2 class="hr">
          <span>Contact</span>
        </h2>
        <ul class="contact-list non-style-list">
          <li v-for="contact in $themeConfig.contacts">
            <b :class="contact.className">{{ contact.className.toUpperCase() }}</b>:
            <a :href="contact.href">{{ contact.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import _ from "lodash";
let VueMasonryPlugin;

if (process.browser) {
  VueMasonryPlugin = require("vue-masonry").VueMasonryPlugin;
  Vue.use(VueMasonryPlugin);
}

export default {
  props: ["page"],
  injectAllPosts: true,
  methods: {
    dayjs: require("dayjs")
  },
  computed: {
    postsByGroup() {
      const { categories } = this.$themeConfig;

      const posts = [...this.page.posts];
      // posts = _.sortBy(posts)
      return {
        featured: posts.filter(post => post.pin),
        others: posts.filter(post => !post.pin)
      }
    }
  },
  data() {
    return {
      // postsByGroup: sorted
    };
  },
  head: {
    title: `Randy's Blog`
  },
  mounted() {}
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
  padding-top: 3rem;

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
  font-size: 1rem;
}

.avatar {
  display: inline-block;
  width: 256px;
  height: 256px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("https://gbstatic.djyde.com/assets/IMG_9051.JPG?x-oss-process=style/80");
}

.post-date {
  margin-left: .5rem;
  color: hsl(0, 0%, 50%);
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
  bottom: 10%;
  text-shadow: 3px 2px 0px #7a7a7a;

  .slogan-title {
    font-weight: bold;
    color: hsl(0, 0%, 100%);
    font-size: 4rem;

    @media (--pc) {
      font-size: 8rem;
    }

    @media (--iphone) {
      font-size: 2rem;
    }
  }
}

/* @lost flexbox flex; */

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

.post-title {
  a {
    text-decoration: underline;
  }
  margin-bottom: 0.5rem;
}

.category-name {
  /* font-size: 2rem; */
  font-weight: bold;
  background-color: hsl(0, 0%, 10%);
  color: hsl(0, 0%, 95%);
  padding: 0.5rem;

  /* border-bottom: .25rem solid hsl(0, 0%, 10%); */
  /* padding-bottom: 1rem; */
  display: inline-block;
  margin-bottom: 1rem;
}

@media (--pc) {
  .group {
    lost-masonry-wrap: no-flex;

    .posts {
      lost-masonry-column: 1/3;
    }
  }
}

@media (--ipad) {
  .group {
    lost-masonry-wrap: no-flex;

    .posts {
      lost-masonry-column: 1/3;
    }
  }
}

.posts-list {
  @media (--pc) {
    .post-item {
    }
  }

  @media (--ipad) {
    .post-item {
      /* lost-column: 1/4; */
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

    .title {
      margin: 0;
      margin-top: 0.5rem;
      font-weight: bold;
      font-size: 1.2rem;
    }

    .date {
      color: hsl(0, 23%, 16%);
      font-weight: lighter;
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }
}
</style>