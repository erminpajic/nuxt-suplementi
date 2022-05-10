<template>
	<div>
		<div class="wp-qty">
			<a class="wp-btn-qty wp-btn-dec" @click="decreaseValue">-</a>
			<input class="wp-input-qty" type="text" v-model="qty" />
			<a class="wp-btn-qty wp-btn-inc" @click="increaseValue">+</a>
			<span class="wp-message product_message product_message" style="display: none"></span>
		</div>
		<div class="wp-unit">unit</div>
	</div>
</template>

<script>
export default {
	name: 'Quantity',
	props: ['item'],
	data() {
		return {
			qty: this.item.quantity,
			qtyLimit: 10
		}
	},
	methods: {
		decreaseValue() {
			this.qty--;
			if(this.qty <= 0) {
				this.qty = 0;
			}
			
			const payload = {
				shopping_cart_code: this.item.shopping_cart_code,
				quantity: this.qty
			};

			//this.$store.dispatch('webshop/fetchData', item);
			// 1. API poziv: slanje nove količine
			// 1.1 ako je količina 0, api poziv za brisanje proizvoda
			// 1.2 ako je količina veća od 0, slanje api poziva za smanjivanje količine
			// 2. store dispatch: ako je slanje uspješno, update košarice kako bi se ažurirale cijene
			if(this.qty <= 0) {
				this.$store.dispatch('webshop/removeProduct', payload);
			} else {
				this.$store.dispatch('webshop/updateQty', payload);
			}
		},
		increaseValue() {
			if(this.qty < this.qtyLimit)
				this.qty++;

			// limit povećavanja broja proizvoda ovisno o skladištu

			const payload = {
				shopping_cart_code: this.item.shopping_cart_code,
				quantity: this.qty
			};
			
			// 1. API poziv: slanje nove količine
			this.$store.dispatch('webshop/updateQty', payload);	
		}
	}
}
</script>