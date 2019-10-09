<template>
  <div>
    <Nav />
    <div class="container">
      <h1>Randy's Readings</h1>

      <div class="intro">
        <!-- <div class="cover" :style="{ backgroundImage: `url('${page.cover}')` }"></div> -->
        <div class="cover">
          <img :src="page.cover" />
        </div>
        <div class="intro-content">
          <slot />
        </div>
      </div>

      <div class="book-lists">
        <div class="category" v-for="category in $themeConfig.books">
          <h2 class="category-name">{{ category.name }}</h2>
          <div class="book-item" v-for="item in category.items">
            <div class="cover">
              <img :src="item.cover" />
            </div>
            <div class="intro">
              <div>《{{ item.title }}》</div>
              <div class="content" v-html="item.desc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/nav";
export default {
  props: ["page"],
  head: {
    title: `Randy's Reading`
  },
  components: {
    Nav
  }
};
</script>

<style scoped>
@custom-media --ipad (480px < width < 1024px);
@custom-media --iphone (320px <= width < 480px);
@custom-media --pc (width >= 1024px);

@lost flex flex;


p {
  line-height: 1.5rem;
}

a {
  padding-bottom: 0.25rem;
  border-bottom: 0.25rem solid hsl(0, 0%, 10%);
}

.intro {
  lost-utility: clearfix;
  margin-bottom: 4rem;
  .intro-content {
    lost-column: 1/3;

    p {
      margin: 0;
      margin-bottom: 1rem;
    }
  }

  .cover {
    lost-column: 2/3;

    img {
      width: 100%;
    }
  }
}

.category {

  .book-item {
    lost-utility: clearfix;
    margin-bottom: 2rem;

    .cover {
      lost-column: 1/6;

      img {
        max-width: 100%;
      }
    }

    .intro {
      line-height: 1.25rem;
      lost-column: 5/6;

      .content {
        color: hsl(0, 0%, 50%);
      }
    }
  }
}
/* 
.cover {
  width: 100%;
  background-size: cover;
  background-position: center;
  padding-bottom: 75%;

  @media (--pc) {
    padding-bottom: 50%;
  }
} */

.container {
  box-sizing: border-box;

  @media (--pc) {
    margin: 0 auto;
    width: 960px;
  }

  @media (--ipad) {
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
  }

  margin-top: 4rem;

  .cover {
    max-width: 100%;
  }
}
</style>