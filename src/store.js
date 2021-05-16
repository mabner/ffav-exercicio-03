import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export const store = new Vuex.Store( {
	state: {
		products: [
			{
				productName: 'Base Triskle 3x110 completa',
				productPrice: '499,00',
				productCategory: 'Patins',
			},
			{
				productName: 'Carretilha Marine Sport',
				productPrice: '248,00',
				productCategory: 'Pesca',
			},
			{
				productName: 'Achocolatado Toddy Black 500g',
				productPrice: '8,99',
				productCategory: 'Alimentos',
			},
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
