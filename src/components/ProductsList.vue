<template>
  <div>
    <div>
      <SearchBar :onSearch="handleSearchProducts" />
    </div>
    <div>
      <div>
        <ProductItem
          v-for="product in products"
          :key="product.productName"
          :product="product"
        />
      </div>
      {{ totalProducts }}
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

export default {
  data() {
    return {
      listedProducts: [],
    };
  },
  name: "ProductsList",
  props: {
    products: Array,
  },
  components: {
    ProductItem,
    SearchBar,
  },
  computed: {
    totalProducts() {
      const totalProd = this.$store.state.products.length;
      return totalProd > 1
        ? `${totalProd} items found.`
        : `${totalProd} item found.`;
    },
  },
  methods: {
    handleOnAddProduct(product) {
      // console.log(product);
      this.products = this.products.concat(product);
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
    increment() {
      this.$store.dispatch("increment");
    },
  },
};
</script>
