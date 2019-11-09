<template>
  <div>
    <nav-header active-nav="writings" />
    <div class="mt-12 font-bold text-gray-500 text-center">Featured</div>

    <div>
      <div
        class="mt-1 text-gray-900 text-center"
        v-for="post in postsByGroup.featured"
        :key="post.permalink"
      >
        <a class="hover:text-gray-600" :href="post.permalink">{{ post.title }}</a>
        <span
          class="text-gray-500 text-sm hidden sm:inline-block"
        >({{ dayjs(post.date).format('MMM DD, YYYY') }})</span>
      </div>
    </div>

    <div class="mt-12 font-bold text-gray-500 text-center">Posts</div>

    <div>
      <div
        class="mt-1 text-gray-900 text-center"
        v-for="post in postsByGroup.others"
        :key="post.permalink"
      >
        <a class="hover:text-gray-600" :href="post.permalink">{{ post.title }}</a>
        <span
          class="text-gray-500 text-sm hidden sm:inline-block"
        >({{ dayjs(post.date).format('MMM DD, YYYY') }})</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    NavHeader: require("./components/header").default
  },
  props: ["page"],
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

</script>