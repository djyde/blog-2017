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
        <div class="bio">
          My name is Randy Lu (卢涛南). I was born in 1995 and I'd been coding since my 13. I used C, PHP, Python, JavaScript. But now I focus on JavaScript and currently work at Alibaba Inc.
        </div>
        <section class="nav">
          <div class="active">
            <a href="/">Posts</a>
          </div>
          <div>
            <a href="/">Readings</a>
          </div>
          <div>
            <a href="/">Music</a>
          </div>
        </section>
      </div>

      <div class="posts-list">
        <template v-for="post in page.posts">
          <div class="post-item">
            <div class="date">{{ post.date }}</div>
            <div class="cover" :style="{ backgroundImage: `url('${post.cover}')`}"></div>
            <h2>
              <a :href="post.permalink">{{ post.title }}</a>
            </h2>
          </div>
        </template>
      </div>
    </div>

    <footer>Randy's Blog</footer>
  </div>
</template>

<script>
export default {
  props: ["page"],
  injectAllPosts: true,
  mounted() {
    console.log(this.page);
  }
};
</script>

<style scoped>
/* header {
  background-color: hsl(0, 0, 20);
  height: 120px;
} */
.container {
  width: 960px;
  margin: 0 auto;
}

.bio {
  margin-top: 2rem;
  font-size: 1.4rem;
}

.big-pic {
  position: relative;
  width: 100%;
  height: 50rem;
  background-size: cover;
  background-position-x: 0rem;
  background-position-y: -15rem;
  background-repeat: no-repeat;
  background-image: url("https://gbstatic.djyde.com/assets/Snapseed%203.jpg?x-oss-process=image/auto-orient,1/quality,q_80/bright,-10/resize,w_2560/contrast,-30");
}

.slogan {
  padding-left: 4rem;
  position: absolute;
  bottom: 8rem;
text-shadow: 3px 2px 0px #7A7A7A;
  .slogan-title {
    font-weight: bold;
    color: hsl(0, 0%, 100%);
    font-size: 8rem;
  }

  .slogan-desc {
    font-size: 4rem;
    color: hsl(0, 0%, 100%);
  }
}

.nav {
  lost-utility: cleafix;
  margin-top: 4rem;
  padding-bottom: 2rem;
  div {
    lost-column: 1/6;
    border-bottom: 1rem solid hsl(0, 0%, 50%);
    transition: all .2s;

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

.posts-list {
  padding-top: 4rem;
  lost-utility: cleafix;

  .post-item {
    lost-column: 1/3;
    margin-bottom: 2.4rem;

    .cover {
      min-width: 100%;
      padding-bottom: 75%;
      background-color: hsl(0, 0%, 90%);
      background-size: cover;
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