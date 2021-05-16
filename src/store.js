import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export const store = new Vuex.Store( {
	state: {
		products: [
			{
				productName: 'Base Triskle 3x110 completa',
				productPrice: '499,00',
				productCategory: 'Bases',
			},
			// {
			// 	productName: 'Mochila Traxart Wild',
			// 	productPrice: '250,00',
			// 	productCategory: 'Mochilas',
			// },
			// {
			// 	productName: 'Kit de Proteção Traxart DG 300',
			// 	productPrice: '279,00',
			// 	productCategory: 'Proteções',
			// },
		],
	},
	getters: {
		getProducts: ( state ) =>
		{
			return state.products.map( ( product ) => product );
		},
	},
	mutations: {
		addProduct ( state, product )
		{
			state.products.push( {
				productName: product.productName,
				productPrice: product.productPrice,
				productCategory: product.productCategory,
			} );
		},
	},

	actions: {
		addProduct ( context, product )
		{
			context.commit( 'addProduct', product );
		},
	},
} );
