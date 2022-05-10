<template>
	<client-only>{{ counter }}</client-only>
</template>

<script>
export default {
	computed: {
		counter: function() {
			const items = this.$store.getters['webshop/getCartItems'];
			let cartItemsCounter = 0;
			items.forEach(el => {
				cartItemsCounter += el.quantity;
			});
			return cartItemsCounter;
		}
	},
	watch: {
		counter(val) {
			this.setClass(val);
		}
	},
	methods: {
		setClass(val) {			
			(val > 0) ? document.body.classList.add('active-cart') : document.body.classList.remove('active-cart');

			/*
			const activeElements = document.querySelectorAll('[data-active-cart]');
			if(activeElements) {
				activeElements.forEach(el => {
					(val > 0) ? el.classList.add('active-cart') : el.classList.remove('active-cart');
				});
			}
			*/
		}
	},
	mounted() {
		setTimeout(() => {
			this.setClass(this.counter);
		},100);
	}
}
</script>