<template>
  <div>
    <span>{{ isNameLimitExceeded }}</span>
    <form v-on:submit.prevent="onFormSubmit">
      <div>
        <p>
          <label for="productName">Nome: </label>
          <input id="productName" v-model="productName" type="text"/>
        </p>
      </div>
      <p>
        <label for="productPrice">Preço: </label>
        <input id="productPrice" v-model="productPrice" type="text"/>
      </p>
      <p>
        <label for="productCategory">Categoria: </label>
        <input id="productCategory" v-model="productCategory" type="text"/>
      </p>
      <button :disabled="disabled" type="submit">Enviar</button>
    </form>
    <p>{{ productName }}<br/>{{ productPrice }}<br/>{{ productCategory }}<br/></p>
  </div>
</template>

<script>
export default {
  name: 'ProductForm',
  data() {
    return {
      productName: '',
      productPrice: '',
      productCategory: '',
      isNameLimitExceeded: '',
      disabled: false,
    };
  },
  props: {
    onAddProduct: Function,
  },
  methods: {
    onFormSubmit() {
      const product = {
        productName: this.productName,
        productPrice: this.productPrice,
        productCategory: this.productCategory,
      };

      this.onAddProduct(product);
    },
  },
  watch: {
    productName() {
      if (this.productName.length > 15) {
        this.isNameLimitExceeded = 'O nome do produto não pode ultrapassar os 15 caracteres';
        this.disabled = true;
      } else {
        this.isNameLimitExceeded = '';
        this.disabled = false;
      }
    },
  },
  // computed
};
</script>
