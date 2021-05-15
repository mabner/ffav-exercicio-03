<template>
  <div id="app">
    <Header pageHeader="Product List" />
    <div>
      <ProductForm :onAddProduct="handleOnAddProduct" />
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";

export default {
  name: "App",
  components: { Header, ProductForm },
};
</script>
