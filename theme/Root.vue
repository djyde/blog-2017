<template>
  <div>
    <slot />

    <div class="font-serif text-sm text-center p-32 text-gray-500 font-bold">
      <p>
        2014-2019
        <a href="/">Randy's Blog</a>
      </p>
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

html {
  @apply antialiased;
}

* {
  transition: .2s all;
}
</style>