import Vue from 'vue';
import VueRouter from 'vue-router';

import { store } from './store';

import App from './App.vue';
import ProductForm from './components/ProductForm.vue';
import ProductsList from './components/ProductsList.vue';

Vue.config.productionTip = false;
Vue.use( VueRouter );

const routes = [ {
	path: '/products', component: ProductsList
},
{
	path: '/', component: ProductForm
} ];

const router = new VueRouter( {
	routes,
	mode: 'history'
} );

new Vue( {
	store,
	router,
	render: ( h ) => h( App ),
} ).$mount( '#app' );
