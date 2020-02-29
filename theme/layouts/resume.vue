<template>
  <div class="post container max-w-4xl mx-auto">
    <slot/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Randy's Resume`
    }
  }
}
</script>