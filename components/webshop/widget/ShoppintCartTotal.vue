<template>
	<div>
		<div class="c-total-cnt cart-total-without-discount">
			<span class="w-totals-label">Ukupno bez popusta:</span>
			<span class="w-totals-value">{{ total.gross_amount|formatCurrency }}</span>
		</div>
		<div class="c-total-cnt cart-total-discount cart_info_total_items_basic_discount_box" style="display: none">
			<span class="w-totals-label">Popust:</span>
			<span class="w-totals-value cart_info_total_items_basic_discount">0,00 kn</span>
		</div>
		<div class="c-total-cnt cart-total-without-tax">
			<span class="w-totals-label">Osnovica za obračun PDV-a:</span>
			<span class="w-totals-value">{{ total.base|formatCurrency }}</span>
		</div>
		<div class="c-total-cnt cart-total-tax">
			<span class="w-totals-label">Ukupan PDV ({{ total.tax_percentage }}%):</span>
			<span class="w-totals-value cart_info_total_items_tax">{{ total.tax|formatCurrency }}</span>
		</div>
		<div class="c-total-cnt cart-total-without-shipping">
			<span class="w-totals-label">Ukupno bez dostave:</span>
			<span class="w-totals-value value cart_info_total_items_total">5,99 kn</span>
		</div>
		<div class="c-total-cnt total_extra_payment_box" style="display: none">
			<span class="w-totals-label">Popust:</span>
			<span class="w-totals-value total_extra_payment">0,00 kn</span>
		</div>
		<div class="c-total-cnt cart-total-shipping">
			<span class="w-totals-label">Dostava:</span>
			<span class="w-totals-value cart_info_total_extra_shipping"><span class="w-totals-label-free">Besplatna</span></span>
		</div>
		<div class="c-total-cnt ww-total cart-total">
			<span class="w-totals-label">Ukupno za plaćanje:</span>
			<span class="w-totals-value value cart_info_total">{{ total.total|formatCurrency }}</span>
		</div>
	</div>
</template>

<style lang="less">
	.c-total-cnt{display: flex; flex-flow: row; justify-content: space-between; align-items: center;}
</style>

<script>
export default {
	computed: {
		total() {
			return this.$store.getters['webshop/getCartTotals'];
		}
	}
	/*
	mounted() {
		console.log(this.total);
	}
	*/
}
</script>