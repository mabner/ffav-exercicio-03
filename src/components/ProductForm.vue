<template>
  <div>
    <span>{{ isNameLimitExceeded }}</span>
    <form v-on:submit.prevent="onFormSubmit">
      <div>
        <p>
          <label for="productName">Nome: </label>
          <input
            id="productName"
            v-model="productName"
            type="text"
            class="form-field"
          />
        </p>
      </div>
      <p>
        <label for="productPrice">Preço: </label>
        <input
          id="productPrice"
          v-model="productPrice"
          type="text"
          class="form-field"
        />
      </p>
      <p>
        <label for="productCategory">Categoria: </label>
        <input
          id="productCategory"
          v-model="productCategory"
          type="text"
          class="form-field"
        />
      </p>
      <button :disabled="disabled" type="submit">Enviar</button>
    </form>
    <p>
      {{ formMessage }}<br />
      {{ productName }} {{ productPrice }} {{ productCategory }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ProductForm",
  data() {
    return {
      productName: "",
      productPrice: "",
      productCategory: "",
      isNameLimitExceeded: "",
      products: [],
      disabled: false,
      formMessage: "",
    };
  },
  methods: {
    onFormSubmit() {
      this.$store.dispatch("addProduct", {
        productName: this.productName,
        productPrice: this.productPrice,
        productCategory: this.productCategory,
      });
      this.productName = "";
      this.productPrice = "";
      this.productCategory = "";
      this.formMessage = "Product recorded";
    },
    handleOnAddProduct(product) {
      this.products = this.products.concat(product);
    },
  },
  watch: {
    productName() {
      if (this.productName.length > 15) {
        this.isNameLimitExceeded =
          "O nome do produto não pode ultrapassar 15 caracteres";
        this.disabled = true;
      } else {
        this.isNameLimitExceeded = "";
        this.disabled = false;
      }
    },
  },
};
</script>
