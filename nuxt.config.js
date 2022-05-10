export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'nuxt-suplementi',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		]
	},

	publicRuntimeConfig: {
		//apiUrl: 'https://fb625cbd-01f2-4e9b-b1ac-a93229a03fdc.mock.pstmn.io/hapi',
		apiUrl: 'https://frontend.marker.hr/wp-json/fed',
		apiVersion: 'v1',
		siteUrl: 'http://frontend.marker.hr',
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~assets/style.css'],

	// Enable vars and mixins acrosss components
	styleResources: {
		less: [
			'./assets/_vars.less',
			'./assets/_mixins.less'
		]
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ['~/plugins/directives.js', '~/plugins/mixins.js', '~/plugins/currency.filter.js'],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ['@nuxtjs/router', '@nuxtjs/style-resources'],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['@nuxtjs/axios'],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	router: {
		middleware: ['dataLoader'],
	}
}
