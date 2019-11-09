<template>
  <nav class="bg-black flex text-gray-300 item-center font-serif">
    <div class="text font-bold mr-4 p-1 pl-4">
      <a href="/">Randy's Blog</a>
    </div>
    <div v-for="nav in $themeConfig.navs" class="flex item-center" :key="nav.alias">
      <a class="mr-4 hover:bg-gray-300 hover:text-gray-900 p-1" :href="nav.url">{{ nav.title }}</a>
    </div>
  </nav>
</template>

<style scoped>
</style>