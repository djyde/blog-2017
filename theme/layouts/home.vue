<template>
  <div class="container mx-auto">
    <nav-header :active-nav="activeNav || page.alias" />

    <slot />
  </div>
</template>

<script>
export default {
  props: ['page', 'activeNav'],
  components: {
    NavHeader: require("./components/header").default
  },
  head() {
    return {
      title: this.page.title
    }
  }
};
</script>
