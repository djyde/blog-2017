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

  &.big {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    /* margin-left: .25rem;
      margin-right: .25rem; */
    border-bottom: 0.25rem solid hsl(0, 0%, 10%);

    &:hover {
      background-color: hsl(0, 0%, 0%);
      color: hsl(0, 0%, 100%);
    }
  }
}

.twitter {
  color: #0C9DF2;
}

.zhihu {
  color: #0767c8;
}

.weibo {
  color: #E80025;
}

.github {
  color: #333333;
}

.medium {
  color: #00ab6b;
}

.email {
  color: #4285F4;
}

.telegram {
  color: #179cde;
}


.hr {
  height: 0;
  font-size: 1rem;
  line-height: 0;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid hsl(0, 0%, 80%);
  margin-top: 2rem;
  margin-bottom: 2rem;
  cursor: default;
  user-select: none;
}

.hr span {
  background-color: #fff;
  padding-left: .5em;
  padding-right: .5em;
  color: hsl(0, 0%, 80%);
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