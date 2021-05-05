<template>
  <div>
    <h3>{{ product.productName }}</h3>
    <h5>{{ product.productCategory }}</h5>
    <h4>{{ product.productPrice }}</h4>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: Object,
  },
};
</script>
