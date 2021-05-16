<template>
  <div id="app">
    <Header pageHeader="Product List" />
    <div class="container">
      <div class="col-md-6">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: { Header },
};
</script>
