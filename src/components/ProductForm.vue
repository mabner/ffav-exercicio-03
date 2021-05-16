<template>
  <div>
    <form v-on:submit.prevent="onFormSubmit">
      <div class="form-floating mb-1">
        <input
          id="productName"
          v-model="productName"
          type="text"
          class="form-control"
        />
        <label for="productName" form-label>Nome:</label>
        <span class="form-text text-danger">
          {{ isNameLimitExceeded }}
        </span>
      </div>

      <div class="form-floating mb-1">
        <input
          id="productPrice"
          v-model="productPrice"
          type="text"
          class="form-control"
        />
        <label for="productPrice" form-label>Preço:</label>
      </div>

      <div class="form-floating mb-1">
        <input
          id="productCategory"
          v-model="productCategory"
          type="text"
          class="form-control"
        />
        <label for="productCategory" form-label>Categoria:</label>
      </div>
      <button :disabled="disabled" type="submit" class="btn btn-primary">
        Enviar
      </button>
    </form>

    <div class="mb-3">
      <span id="recordMsg" class="text-success"></span>
      <span id="productText" class="text-primary"
        >{{ productName }} {{ productPrice }} {{ productCategory }}</span
      >
    </div>
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
      document.getElementById("recordMsg").innerHTML = "Product recorded!"
      setTimeout(function () {
        document.getElementById("recordMsg").innerHTML = "";
      }, 3000);
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
