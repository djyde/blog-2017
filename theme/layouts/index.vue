<template>
  <div>
    <nav-header active-nav="writings" />
    <div class="mt-12 font-bold font-sans text-gray-500 text-center mb-6">Featured</div>

    <div>
      <div
        class="mt-2 text-gray-900 text-center sm:max-w-md sm:text-left sm:mx-auto md:max-w-xl"
        v-for="post in postsByGroup.featured"
        :key="post.permalink"
      >
        <span
          class="text-gray-500 text-xs hidden sm:inline-block mr-2"
        >{{ dayjs(post.date).format('YYYY-MM-DD') }}</span>
        <a class="hover:text-gray-600" :href="post.permalink">{{ post.title }}</a>
      </div>
    </div>

    <div class="mt-12 font-bold font-sans text-gray-500 text-center mb-6">Posts</div>

    <div>
      <div
        class="mt-2 text-gray-900 text-center sm:max-w-md sm:text-left sm:mx-auto md:max-w-xl"
        v-for="post in postsByGroup.others"
        :key="post.permalink"
      >
        <span
          class="text-gray-500 text-xs hidden sm:inline-block mr-2"
        >{{ dayjs(post.date).format('YYYY-MM-DD') }}</span>
        <a class="hover:text-gray-600" :href="post.permalink">{{ post.title }}</a>
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
  head() {
    return {
      title: this.$themeConfig.title,
      meta: [
        {
          property: "title",
          content: this.$themeConfig.title
        },
        {
          property: "description",
          content: this.$themeConfig.description
        },
        {
          property: "og:title",
          content: this.$themeConfig.title
        },
        {
          property: "og:url",
          content: this.$siteConfig.url
        },
        {
          property: "og:image",
          content: this.$themeConfig.avatar
        }
      ]
    };
  },
  mounted() {}
};
</script>

</script>