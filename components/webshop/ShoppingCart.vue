<template>
	<div class="main wrapper clear">
		<UiBreadcrumbs :breadcrumb="data"/>
		<h1 class="w-title">{{ data.seo_h1 }}<span class="w-counter" data-active-cart>(<ShoppingCartCounter/>)</span></h1>
		<div v-html="data.content" v-interpolation></div>
		<div class="clear w-row-flex">
			<div class="w-col w-col1">
				<div class="w-table">
					<ShoppingCartEntry v-for="item in cartItems" :item="item" :key="item.line"/>
				</div>
			</div>
			<div class="w-col w-col2">
				<div class="w-totals box-shadow">
					<div class="w-totals-wrapper">
						<h2 class="w-totals-title">Ukupno u košarici</h2>
						<ShoppingCartTotal class="clear cart-totals"/>
						<a class="btn btn-purple w-btn-finish cart-finish-shopping" href="https://b2b.cotra.hr/webshop/placanje/#webshop_form"><span>Dovrši kupovinu</span></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>

</style>

<script>
import ShoppingCartCounter from "./widget/ShoppingCartCounter.vue";
import Quantity from "./widget/Quantity.vue";
import RemoveProduct from "./widget/RemoveProduct.vue";
import ShoppingCartTotal from "./widget/ShoppintCartTotal.vue";
import ShoppingCartEntry from "./widget/ShoppingCartEntry.vue"
export default {
	props: ["data"],
	computed: {
		cartItems() {
			return this.$store.getters["webshop/getCartItems"];
		}
	},
	components: { 
		ShoppingCartCounter, 
		Quantity, 
		RemoveProduct, 
		ShoppingCartTotal, 
		ShoppingCartEntry 
	}
}
</script>