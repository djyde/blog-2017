<template>
  <div>
    <slot />

    <div id="footer">
      <p>
        <img width="256px" src="//s2.ax1x.com/2019/04/04/A2V9YT.png" />
      </p>
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
@import "normalize.css";

body {
  font-family: "Noto Serif SC", Lusitana, serif;
}

blockquote {
  padding: 0;
  margin: 0;
  padding-left: 1.5rem;
  border-left: 0.5rem solid hsl(0, 0%, 80%);
}

a {
  color: hsl(0, 0%, 20%);
  transition: all 0.2s;
  text-decoration: none;
  &:hover {
    color: hsl(0, 0%, 0%);
  }
}

hr {
  border: 0;
  border-bottom: 1px solid #a7adba;
  margin-bottom: 1em;
  margin-top: 1em;
}

li {
  margin-bottom: 0.5rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, PingFang SC, Hiragino Sans GB, Microsoft Yahei, sans-serif;
}

#footer {
  margin-top: 2em;
  padding: 1em;
  background-color: #fafafa;
  text-align: center;
  color: #c0c5ce;
}

#footer a {
  color: #c0c5ce;
}
</style>