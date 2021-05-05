<template>
  <div id="app">
    <Header pageHeader="Product List"/>
    <div>
      <ProductForm :onAddProduct="handleOnAddProduct"/>
    </div>
    <div>
      <ProductsList :products="listedProducts.length > 0 ? listedProducts : products"/>
    </div>
    <div>
      <SearchBar :onSearch="handleSearchProducts"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductsList from './components/ProductsList';
import SearchBar from './components/SearchBar';

export default {
  name: 'App',
  components: {Header, ProductForm, ProductsList, SearchBar},
  data() {
    return {
      products: [
        {
          productName: 'Base Triskle 3x110 completa',
          productPrice: '499,00',
          productCategory: 'Bases',
        },
        {
          productName: 'Mochila Traxart Wild',
          productPrice: '250,00',
          productCategory: 'Mochilas',
        },
        {
          productName: 'Kit de Proteção Traxart DG 300',
          productPrice: '279,00',
          productCategory: 'Proteções',
        },
      ],
      listedProducts: [],
    };
  },
  methods: {
    handleOnAddProduct(product) {
      // console.log(product);
      this.products = this.products.concat(product);
    },
    handleSearchProducts(productName) {
      const results = this.products.filter((prod) =>
          prod.productName.startsWith(productName));
      if (results.length > 0) {
        this.listedProducts = results;
      } else {
        this.listedProducts = this.products;
      }
    },
  },
};
</script>
