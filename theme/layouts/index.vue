<template>
  <div class="pt-32 container mx-auto">
    <div>
      <div>
        <div class="avatar block mx-auto w-64 h-64 bg-cover bg-center rounded-full" />
        <img class="w-24 mx-auto" src="https://gbstatic.djyde.com/sign_square_white.png?x-oss-process=style/80" />
      </div>
      <nav>
        <div class="flex w-full justify-center p-8">
          <div v-for="navItem in $themeConfig.navs" class="flex flex-col ml-6 mr-6 text-gray-600">
            <a class="hover:text-gray-900 text-center" :href="navItem.url">
              <div>{{ navItem.title }}</div>
              <div
                class="text-center text-sm font-serif"
              >{{ navItem.alias.toUpperCase() }}</div>
            </a>
          </div>
        </div>
      </nav>
      <!-- <div v-html="$themeConfig.bio" class="bio"></div> -->
    </div>

    <div class="mt-12 font-bold text-gray-500 text-center">Featured</div>

    <div>
      <div class="mt-1 text-gray-900 text-center" v-for="post in postsByGroup.featured">
        <a class="hover:text-gray-600" :href="post.permalink">{{ post.title }}</a>
        <span
          class="post-date text-gray-500 text-sm"
        >({{ dayjs(post.date).format('MMM DD, YYYY') }})</span>
      </div>
    </div>

    <div class="mt-12 font-bold text-gray-500 text-center">Posts</div>

    <div>
      <div class="mt-1 text-gray-900 text-center" v-for="post in postsByGroup.others">
        <a class="hover:text-gray-600" :href="post.permalink">{{ post.title }}</a>
        <span
          class="post-date text-gray-500 text-sm"
        >({{ dayjs(post.date).format('MMM DD, YYYY') }})</span>
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
      };
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
.avatar {
  background-image: url("https://gbstatic.djyde.com/assets/IMG_9051.JPG?x-oss-process=style/80");
}
</style>