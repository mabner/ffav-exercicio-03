<template>
  <div>
    <div>
      <ul>
        <li v-for="product in products" :key="product.productName">
          <!-- {{ product.name }} | {{ product.price }} | {{ product.category }} -->
          <ProductItem :product="product"/>
        </li>
      </ul>
      {{ totalProducts }}
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem';

export default {
  data() {
    return {
      listedProducts: [],
    };
  },
  name: 'ProductsList',
  props: {
    products: Array,
  },
  components: {
    ProductItem,
  },
  computed: {
    totalProducts() {
      const totalProd = this.products.length;
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
