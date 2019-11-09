<template>
  <div class="pt-32">
    <div>
      <div class="avatar block mx-auto w-64 h-64 bg-cover bg-center rounded-full" />
      <img
        class="w-24 mx-auto"
        src="https://gbstatic.djyde.com/sign_square_white.png?x-oss-process=style/80"
      />
    </div>
    <nav>
      <div class="flex flex-col sm:flex-row w-full justify-center p-8">
        <div :key="navItem.title" v-for="navItem in $themeConfig.navs" :class="['mt-6 sm:mt-0 sm:ml-6 sm:mr-6 text-gray-600', { 'text-gray-900': activeNav === navItem.alias }]">
          <a class="hover:text-gray-900 text-center" :href="navItem.url">
            <div>{{ navItem.title }}</div>
            <div class="text-center text-sm font-serif">{{ navItem.alias.toUpperCase() }}</div>
          </a>
        </div>
      </div>
    </nav>
    <!-- <div v-html="$themeConfig.bio" class="bio"></div> -->
  </div>
</template>

<script>
export default {
  props: ['activeNav']
}
</script>

<style scoped>
.avatar {
  background-image: url("https://gbstatic.djyde.com/assets/IMG_9051.JPG?x-oss-process=style/80");
}
</style>