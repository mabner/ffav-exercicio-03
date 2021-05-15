<template>
  <div id="app">
    <Header pageHeader="Product List" />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: { Header },
};
</script>
