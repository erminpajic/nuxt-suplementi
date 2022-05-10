<template>
	<a @click="removeProduct" href="javascript:void(0);"><slot/></a>
</template>

<script>

export default {
	props: ['item'],
	methods: {
		removeProduct() {
			this.$store.dispatch('webshop/removeProduct', this.item);
		}
	}
}
</script>
