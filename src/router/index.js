import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import store from '@/store';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/quizz',
		name: 'Quizz',
		component: () => import('../views/Quizz.vue')
	},
	{
		path: '/results',
		name: 'Results',
		component: () => import('../views/Results.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	// console.table({
	// 	name: store.state.name === '',
	// 	email: store.state.email === '',
	// 	legals: store.state.legals,
	// 	to: to.name,
	// 	answers: store.state.answers.length,
	// 	questions: store.state.questions.length
	// });
	if (((store.state.name === '') ||
		(store.state.email === '') ||
		(!store.state.legals)) &&
		(to.name !== 'Home')
	) {
		console.error('Router Guarded to Home');
		next({
			name: 'Home'
		});
	} else if ((store.state.name !== '') &&
		(store.state.email !== '') &&
		(store.state.legals) &&
		(store.state.answers.length !== store.state.questions.length) &&
		(to.name !== 'Quizz')
	) {
		console.error('Router Guarded to Quizz');
		next({
			name: 'Quizz'
		});
	}

	// console.log('whatever');
	next();
});

export default router;
