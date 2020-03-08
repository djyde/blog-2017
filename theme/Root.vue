<template>
  <div>
    <slot />

    <div class="font-serif text-sm text-center p-12 sm:p-32 text-gray-500 font-bold">
      <div>
        2014-2019
        <a href="/">Randy's Blog</a>
      </div>
      <div class="mt-2">
        可通過
        <a class="border-b-4" href="/rss.xml">RSS</a> 或
        <a class="border-b-4" href="https://tinyletter.com/randysblog">Email</a> 訂閱本博客
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      // meta: [
      //   {
      //     name: 'viewport',
      //     content: 'width=device-width,user-scalable=no'
      //   }
      // ],
      meta: [
        {
          name: "og:site_name",
          content: this.$themeConfig.title
        }
      ],
    };
  }
};
</script>

<style>
@import "./styles/global.css";
</style>