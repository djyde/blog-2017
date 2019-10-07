<template>
  <div>
    <slot />
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
        rel: 'stylesheet',
        href:
          '//ppp.djyde.com/css?family=Noto+Serif+SC'
      }
    ]
  }
}
</script>

<style>
@import "normalize.css";

body {
  font-family: 'Noto Serif SC',Lusitana, serif;
}

blockquote {
  padding: 0;
  margin: 0;
  padding-left: 1.5rem;
  border-left: .5rem solid hsl(0, 0%, 80%);
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
  border-bottom: 1px solid #A7ADBA;
  margin-bottom: 1em;
  margin-top: 1em;
}

li {
  margin-bottom: .5rem;
}

</style>