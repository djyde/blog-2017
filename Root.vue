<template>
  <div>
    <slot />
  </div>
</template>

<style>
@import "normalize.css";

body {
  font-family: Lusitana, serif;
}

a {
  color: hsl(0, 0%, 20%);
  transition: all 0.2s;
  text-decoration: none;
  &:hover {
    color: hsl(0, 0%, 0%);
  }
}
</style>