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
};
</script>
