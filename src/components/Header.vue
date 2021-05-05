<template>
  <header>
    <h1>{{ pageHeader }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    pageHeader: String,
  },
};
</script>

<style scoped>

</style>