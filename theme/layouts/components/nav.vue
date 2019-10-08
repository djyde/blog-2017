<template>
  <nav>
    <div class="logo">
      <a href="/">Randy's Blog</a>
    </div>
    <div v-for="menu in $themeConfig.menus" class="nav-item">
      <a :href="menu.path">{{ menu.title }}</a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: hsl(0, 0%, 0%);

  .logo {
    padding-left: 1rem;
    margin-right: 2rem;
    display: inline-block;
    a {
      font-weight: bold;
      color: hsl(0, 0%, 100%);
    }
  }

  .nav-item {
    display: inline-block;

    a {
      display: block;
      color: hsl(0, 0%, 100%);
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    a:hover {
      color: hsl(0, 0%, 0%);
      background-color: hsl(0, 0%, 100%);
    }
  }
}
</style>