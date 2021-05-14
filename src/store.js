import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		count: 0,
	},
	mutations: {
		increment(state) {
			state.count++;
		},
	},
	actions: {
		increment(context) {
			context.commit('increment');
		},
	},
});
