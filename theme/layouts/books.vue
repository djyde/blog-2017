<template>
  <div>
    <Nav />
    <div class="container">
      <h1>Randy's Readings</h1>

      <div class="intro">
        <!-- <div class="cover" :style="{ backgroundImage: `url('${page.cover}')` }"></div> -->
        <div class="cover">
          <img :src="page.cover" />
        </div>
        <div class="intro-content">
          <slot />
        </div>
      </div>

      <div style="margin-bottom: 36px;">
        <h2>我在读的书</h2>
        <a class="big" href="https://book.douban.com/people/djyde/do" target="_blank">豆瓣</a>
      </div>

      <div class="book-lists">
        <div class="category" v-for="category in $themeConfig.books">
          <h2 class="category-name">{{ category.name }}</h2>
          <div class="book-item" v-for="item in category.items">
            <div class="cover">
              <img :src="item.cover" />
            </div>
            <div class="intro">
              <div>《{{ item.title }}》</div>
              <div class="content" v-html="item.desc" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>书评</h2>
        In progress...
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/nav";
export default {
  props: ["page"],
  head: {
    title: `Randy's Readings`
  },
  components: {
    Nav
  }
};
</script>

<style scoped>
</style>