<template>
  <div>
    <div>
      <input v-model="searchProducts" type="text"/>
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

export default {
  data() {
    return {
      searchProducts: "",
      listedProducts: [],
      products: this.$store.getters.getProducts,
    };
  },
  name: "ProductsList",
  components: {
    ProductItem,
  },
  computed: {
    totalProducts() {
      const totalProd = this.$store.state.products.length;
      return totalProd > 1
        ? `${totalProd} items found.`
        : `${totalProd} item found.`;
    },
  },
  watch: {
    searchProducts: function (prod) {
      prod = prod.toLowerCase();
      if (this.listedProducts.length === 0) {
        this.listedProducts = this.products;
      }
      this.products = this.products.filter(
        (item) => item.productName.toLowerCase().indexOf(prod) !== -1
      );
      if (prod.length === 0) {
        this.products = this.listedProducts;
      }
    },
  },
  methods: {
    handleOnAddProduct(product) {
      this.products = this.products.concat(product);
    },

  },
};
</script>
