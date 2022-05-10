<template>
	<div class="wp">
		<div class="wp-image">
			<figure>
				<!-- FIXME if (!Arr::get($info, 'user_disabled_price')) -->
				<span class="cp-badge cp-badge-discount">-10%</span>
				<img src="https://via.placeholder.com/80x80" width="80" height="80" alt="">
			</figure>
			<a class="wp-btn-delete wp-btn-delete-m" href="javascript:cmswebshop.shopping_cart.change_qty('<?php echo $product_code; ?>', 'remove');"><span><?php echo Arr::get($cmslabel, 'remove_product', 'Obriši'); ?></span></a>
		</div>
		<div class="wp-cnt">
			<div class="wp-cnt-intro">
				<h2 class="wp-title">
					<NuxtLink :to="item.item.url">{{item.item.title}}</NuxtLink>
					<span class="wp-attribute">Atributi</span>
				</h2>
				<!-- FIXME if (!empty($product_data['internal_code'])) -->
				<div class="wp-code" v-if="item.item.internal_code">{{ cmslabel('catalog_code', 'title') }}: {{ item.item.internal_code }}</div>
				<div class="wp-code">{{ cmslabel('code', 'title') }}: {{ item.item.code }}<!--<?php echo (!empty($product_data['variation_code'])) ? $product_data['variation_code'] : $product_data['code']; ?>--></div>
			</div>
			<RemoveProduct :item="item" class="wp-btn-delete wp-btn-delete-d">{{ cmslabel('remove_product', 'title') }}</RemoveProduct>
		</div>
		<div class="wp-qty-cnt">
			<Quantity :item="item"/>
		</div>

		<!-- FIXME if (!Arr::get($info, 'user_disabled_price')): -->
		<div class="wp-total has-discount">
			<div class="wp-price-current product_total">{{ item.total|formatCurrency }}</div>
			<div class="wp-qty-count">
				<span class="product_qty">{{ item.quantity }} x {{ item.unit_price|formatCurrency}}</span>
			</div>

			<!--
			<?php if ($product_status['total_basic'] > $product_status['total']): ?>
				<div class="wp-price-old product_total_basic"><?php echo Utils::currency_format($product_status['total_basic'] * $currency['exchange'], $currency['display']); ?></div>
				<div class="wp-price-current wp-price-discount red product_total"><?php echo Utils::currency_format($product_status['total'] * $currency['exchange'], $currency['display']); ?></div>
			<?php else: ?>
				<div class="wp-price-current product_total"><?php echo Utils::currency_format($product_status['total'] * $currency['exchange'], $currency['display']); ?></div>
			<?php endif ?>
			<div class="wp-qty-count">
				<span class="product_qty"><?php echo $product_status['qty']; ?><?php if($product_data['unit']): ?> <?php echo $product_data['unit'] ?><?php else: ?> <?php echo Arr::get($cmslabel, 'unit'); ?><?php endif; ?></span> x <span class="product_price"><?php echo Utils::currency_format($product_status['price'] * $currency['exchange'], $currency['display']); ?></span>
			</div>
			<?php if (Kohana::config('app.catalog.multitax')): ?>
				<div class="wp-multitax"><?php echo Arr::get($cmslabel, 'tax'); ?> <?php echo ($product_status['tax'] * 100); ?>%</div>
			<?php endif; ?>
			-->
		</div>
	</div>
</template>

<script>
	import Quantity from './Quantity.vue'
	import RemoveProduct from './RemoveProduct.vue'
	export default {
		props: ['item'],
		components: {
			Quantity,
			RemoveProduct
		}
	}
</script>
