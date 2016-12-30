---
title: what-react-actually-is
tags:
---
---
title: What React actually is
date: 2016-12-30 11:07:26
tags:
---

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">If using React makes u confused, it&#39;s time to think about what React actually is. It&#39;s a great DOM diff algorithm with component system.</p>&mdash; Randy (@randyloop) <a href="https://twitter.com/randyloop/status/814663047541231616">December 30, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Today I tweeted about my thinking of React. I want to say more detail about it.

What is React? If I ask this question to a frontend developer nowaday, I don't think that someone dosen't know. One may say React is a library for building SPA, the others may say React is a library that free me from mutating the DOM.

Are they correct? Of course they are. Everyday we use React, use `this.setState` to modify the state, then React helps us do render job.

But when project becomes complicated, developers feel confused. Application state is mess, they don't even know how to write a maintainable application.

Why has that happend? **Because they use React as a framework. They write a lot logic codes in React component, what we call side-effect.**

Let's forget all the things we know about React and let me tell you what React actually is.

Imagine we are going to write a clock. We will write:

```html
<div id="app">
  <span>It's now:</span>
  <span id="time"></span>
</div>
<script>
  const $time = document.querySelector('#time')
  setInterval(() => {
    $time.innerText = Date.now()
  }, 1000)
</script>
```

This is good enough. But as we all know, web application is complicated, we don't want to mutate the DOM ourselves. **What if the UI is a function**:


```javascript
const $app = document.querySelector('#app')

function render () {
  const Clock = `
    <span>It's now:</span>
    <span class="time">${Date.now()}</span>
  `
  $app.innerHTML = Clock
}

setInterval(render, 1000)
```

The `Clock` is just function, it receive a params and display it in a span. We set an interval to pass a new date string to Clock and `render()` the UI every one second. In this way, we don't need to mutate the DOM. We just explain what the DOM likes, and apply it to the root element.

Everything done right. But what is the problem if we write our UI in this way?

![](/images/plain-render-clock.gif)

The dark side of `innerHTML` is it touches the whole DOM tree. **When you touch the DOM in any way, you set a dirty bit on the whole tree that tells the browser it needs to figure out where everything goes again**(https://news.ycombinator.com/item?id=9155564). In a word, DOM changes cost a lot.

If we have a tool that can figure out which DOM node should be rerender, the application will be faster. React is a library to do it:

```javascript
const $app = document.querySelector('#app')

function render () {
  const Clock = (
    <div>
      <span>It's now: </span>
      <span>{Date.now()}</span>
    </div>
  )
  ReactDOM.render(Clock, $app)
}

setInterval(render, 1000)
```

`ReactDOM.render` knows which node should be rerender.

![](/images/react-render-clock.gif)

<!--After using React for a year, I learn a lot. It's not only change my way to build web UI, I also learn a lot about FP (Functional Programming). -->