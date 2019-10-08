<template>
  <div>
    <Nav />
    <div class="container">
      <img class="cover" src="https://gbstatic.djyde.com/assets/Snapseed%204.jpg?x-oss-process=style/80" />
      <slot />
    </div>
  </div>
</template>

<script>
import Nav from "./components/nav";
export default {
  components: {
    Nav
  }
};
</script>

<style scoped>
@custom-media --ipad (480px < width <= 1024px);
@custom-media --iphone (320px <= width < 480px);
@custom-media --pc (width > 1024px);

p {
  line-height: 1.5rem;
}

.container {

  @media (--pc) {
    margin: 0 auto;
    width: 600px;
  }

  margin-top: 4rem;

  .cover {
    max-width: 100%;
  }
}
</style>