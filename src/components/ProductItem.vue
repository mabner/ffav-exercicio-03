<template>
  <div class="card-body list-group list-group-flush">
    <h3 class="card-title">{{ product.productName }}</h3>
    <h5 class="subtitle">Categoria: {{ product.productCategory }}</h5>
    <h4 class="card-text">R$ {{ product.productPrice }}</h4>
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
