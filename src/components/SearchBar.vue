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
  },
};
</script>
