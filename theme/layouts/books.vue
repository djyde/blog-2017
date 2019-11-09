<template>
  <div>
    <nav-header active-nav="readings" />
    <div class="container mx-auto post">
      <div class="intro">
        <!-- <div class="cover" :style="{ backgroundImage: `url('${page.cover}')` }"></div> -->
        <div class="lg:pl-64 lg:pr-64">
          <img class="w-auto" :src="page.cover" />
        </div>
        <div class="intro-content pl-4 pr-4 sm:pl-0 sm:pr-0">
          <slot />
        </div>
      </div>

      <div class="text-center sm:text-left">
        <a class="big" href="https://book.douban.com/people/djyde/do" target="_blank">我正在读的书</a>
      </div>

      <div class="mt-12">
        <div class="" v-for="category in $themeConfig.books" :key="category.name">
          <h2 class="text-center text-gray-500 font-bold">{{ category.name }}</h2>
          <div class="book-item" v-for="item in category.items" :key="item.title">
            <div class="p-4">
              <img class="sm:max-w-xs mx-auto" :src="item.cover" />
            </div>
            <div class="p-4 lg:pl-64 lg:pr-64">
              <div class="font-bold text-center">《{{ item.title }}》</div>
              <div class="content" v-html="item.desc" />
            </div>
          </div>
        </div>
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
    NavHeader: require('./components/header').default
  }
};
</script>

<style scoped>
</style>