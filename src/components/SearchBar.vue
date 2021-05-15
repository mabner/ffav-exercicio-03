<template>
  <form v-on:submit.prevent="handleSearch">
    <input v-model="search" type="text" v-on:keyup="handleSearch"/>
    <button type="submit">Search</button>
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    onSearch: Function,
  },
  data() {
    return {
      search: '',
    };
  },
  methods: {
    handleSearch() {
      this.onSearch(this.search);
    },
    handleSearchProducts(productName) {
      const results = this.products.filter((prod) =>
        prod.productName.startsWith(productName)
      );
      if (results.length > 0) {
        this.listedProducts = results;
      } else {
        this.listedProducts = this.products;
      }
    },
  },
};
</script>
