import Vue from 'vue'
import Router from 'vue-router'

import Default from '~/components/Default'

Vue.use(Router)

export function createRouter() {
	return new Router({
		mode: 'history',
		routes: [
			{
				path: '*',
				component: Default
			}
		]
	})
}