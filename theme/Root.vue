<template>
  <div>
    <slot />

    <div class="font-serif text-sm text-center p-32 text-gray-500 font-bold">
      <div>
        2014-2019
        <a href="/">Randy's Blog</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    // meta: [
    //   {
    //     name: 'viewport',
    //     content: 'width=device-width,user-scalable=no'
    //   }
    // ],
    link: [
      {
        rel: "stylesheet",
        href: "//ppp.djyde.com/css?family=Noto+Serif+SC"
      }
    ]
  }
};
</script>

<style>
@import "./styles/global.css";
</style>