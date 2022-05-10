<template>
	<div class="ww cart" data-shoppingcart_active="1" data-active-cart>
		<NuxtLink to="/webshop/" class="ww-items header-btn">
			<span class="ww-counter header-btn-counter">
				<span class="value ww-total-items total-items cart_info_item_count total_items"><ShoppingCartCounter/></span>
			</span>
		</NuxtLink>

		
	</div>
</template>

<script>
import ShoppingCartCounter from "./ShoppingCartCounter.vue";
export default {
	components: { ShoppingCartCounter }
}
</script>

<style lang="less">

</style>