<template>
  <div>
    <nav-bar />
    <div v-if="page.cover" class="bg-cover" :style="{ paddingBottom: '40%', backgroundImage: `url('${page.cover}')`}"></div>
    <div class="post container mx-auto lg:pl-48 lg:pr-48" >
      <h1 class="pl-4 pr-4">{{ page.title }}</h1>
      <div v-if="page.date" class="text-sm text-gray-500 pl-4 pr-4">{{ dayjs(page.date).format('MMMM DD, YYYY') }}</div>
      <div class="content">
        <slot />
      </div>
    </div>
    <div class="post text-center text-sm">
      <hr class="mt-12 mb-12" />
      <p>讨论请发邮件到 randypriv@gmail.com</p>
      <p>未经授权，禁止转载</p>
      <p>通过支付宝 djyde520@gmail.com 或赞赏码赞助此文</p>
      <p>
        或通过订阅我的
        <a href="/blog/my-zsxq/">知识星球</a>支持本博客
      </p>
      <br />
      <p>
        <img class="w-auto sm:w-64 mx-auto" src="//gbstatic.djyde.com/assets/006tKfTcgy1fkuufy2cadj30w00w0tb2.jpg" />
      </p>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/nav";

export default {
  props: ["page"],
  components: {
    NavBar
  },
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
@import "../styles/prism-dracula.css";
</style>