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
      searchProducts: "",
      products: this.$store.getters.getProducts,
    };
  },
  name: "ProductsList",
  // props: {
  //   products: Array,
  // },
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
      // console.log(product);
      this.products = this.products.concat(product);
    },
    // handleSearchProducts(productName) {
    //   const results = this.products.filter((prod) =>
    //     prod.productName.startsWith(productName)
    //   );
    //   if (results.length > 0) {
    //     this.listedProducts = results;
    //   } else {
    //     this.listedProducts = this.products;
    //   }
    // },
  },
};
</script>
