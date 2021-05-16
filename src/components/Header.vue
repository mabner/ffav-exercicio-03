<template>
  <header>
    <h1>{{ pageHeader }} <small class="text-muted">Exercise 3 - Vue.js</small></h1>
    <router-link class="topLink" to="/">Form</router-link>
    <router-link class="topLink" to="/products">List</router-link>
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
.topLink {
  padding: 5px;
  text-decoration: none;
  color: teal;
}
.topLink:hover {
  color: crimson;
}
</style>