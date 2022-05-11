<template>
	<div class="wp">
		<div class="wp-image">
			<figure>
				<!-- FIXME if (!Arr::get($info, 'user_disabled_price')) -->
				<img src="https://via.placeholder.com/80x80" width="80" height="80" alt="">
			</figure>
			<RemoveProduct :item="item" class="wp-btn-delete wp-btn-delete-d">{{ cmslabel('remove_product', 'title') }}</RemoveProduct>
		</div>
		<div class="wp-cnt-all">
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
			</div>
			<Quantity :item="item"/>
			

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
	</div>
</template>

<style lang="less" scoped>
	.wp{display: flex; padding: 20px 25px 20px 20px; border: 1px solid @borderColor; margin-top: -1px; position: relative; align-items: center;
		@media(max-width: @tp){padding: 15px; border-left: unset; border-right: 0;}
		@media(max-width: @m){align-items: unset;}
	}
	#view_cart{width: 100%;}

	.wp-image{
		flex-shrink: 0; display: flex; align-items: center; height: 80px; width: 80px; justify-content: center; position: relative;
		img{display: block; max-height: 100%; max-width: 100%; width: auto; height: auto; margin: auto;}
		@media(max-width: @tp){width: 70px; height: 70px;}
		@media(max-width: @m){position: unset;}
	}
	.wp-cnt-all{display: flex; width: 100%; align-items: center; padding-left: 20px;
		@media(max-width: @t){padding-left: 15px;}
		@media(max-width: @tp){padding-left: 12px;}
		@media(max-width: @m){flex-wrap: wrap;}
	}
	.wp-cnt{padding: 0 15px 0 0; width: auto; flex-grow: 1; display: flex; flex-flow: column; display: flex; flex-flow: column;
		@media(max-width: @t){padding: 0 10px 0 0;}
		@media(max-width: @m){width: 100%; padding: 0 0 8px 0;}
	}

	.wp-category-title{
		position: relative; font-weight: bold; .font2; font-size: 12px; line-height: 14px; color: @green; padding-bottom: 4px; text-decoration: none;
		@media (min-width: @h){
			&:hover{color: @green/1.2;}
		}
	}

	.wp-title{
		font-size: 16px !important; line-height: 20px; padding-top: 0; padding-bottom: 5px; color: @textColor; position: static; font-family: @font; font-weight: normal;
		a{color: @textColor; position: relative; 
			@media (min-width: @h){
				&:hover{color: @green;}
			}
		}
		@media(max-width: @tp){font-size: 14px !important; line-height: 18px; padding-bottom: 4px;}
	}
	.wp-code{
		font-size: 12px; line-height: 15px; 
		span{font-weight: bold;}
	}

	.wp-message{
		font-size: 10px; margin-top: 5px; line-height: 13px; position: absolute; left: 0; width: 100%; bottom: -30px; color: @red; background: white; z-index: 2000; text-align: center;
		&.product_message_response_ok{color: @green;}
		@media(max-width: @t){left: -10px; right: -10px; width: calc(~"100% - -20px");}
	}

	.wp-qty-cnt{
		.wp-unit{text-align: center; color: @black; opacity: .5; bottom: 3px; font-size: 12px; line-height: 14px; margin: 0; position: absolute;}
		@media(max-width: @t){
			.wp-unit{bottom: 2px;}
		}
		@media(max-width: @tp){
			.wp-unit{bottom: 5px; font-size: 11px; line-height: 13px;}
		}
	}
	.wp-qty{
		margin-bottom: 0; width: 125px; min-height: 60px; position: relative; text-align: center;
		input{width: 125px; height: 60px; border-radius: 30px; position: relative; text-align: center; padding: 0 50px 0; font-size: 16px; border: 1px solid @borderColor; line-height: 20px;}
		@media(max-width: @t){ width: 100px; min-height: 54px;
			input{width: 100px; height: 54px; padding: 0 40px 0;}
		}
		@media(max-width: @tp){
			input{height: 50px;}
		}
	}
	.wp-btn-qty{
		position: absolute; top: 0; height: 60px; width: 50px; z-index: 9; min-width: 50px; min-height: 60px; border-radius: 30px 0 0 30px; font-size: 0; line-height: 0;
		&:before{.pseudo(12px,2px); left: 50%; margin-left: -6px; top: 50%; margin-top: -1px; background: @green;}
		&:after{.pseudo(2px,12px); left: 50%; margin-left: -1px; top: 50%; margin-top: -6px; background: @green;}
		@media(max-width: @t){height: 54px; min-height: 54px; width: 40px; min-width: 40px;}
		@media(max-width: @tp){height: 50px; min-height: 50px;}
	}
	.wp-btn-inc{right: 0; border-radius: 0 30px 30px 0;}

	.wp-btn-dec{
		&:after{display: none;}
	}
	.wp-total{min-width: 130px; padding-top: 0; padding-left: 10px; align-items: baseline; font-size: 13px; line-height: 17px;
		@media(max-width: @t){min-width: 105px;}
		@media(max-width: @tp){min-width: 125px;}
		@media(max-width: @m){min-width: 105px; flex-grow: 1;}
	}

	.wp-unit-qty{text-align: right; font-size: 13px; line-height: 17px; padding-bottom: 1px;}
	.wp-price-current, .wp-price-discount{color: @textColor; display: block; text-align: right; font-size: 16px; line-height: 20px; font-weight: bold;
		@media(max-width: @tp){font-size: 14px; line-height: 18px;}
	}
	.wp-price-current{padding-top: 20px;
		@media(max-width: @tp){padding-top: 12px;}
		@media(max-width: @m){padding-top: 8px;}
	}
	.wp-price-discount{padding-top: 0 !important;}
	.wp-price-discount{padding-top: 0 !important; color: @red;}
	.wp-price-old, .wp-price-label, .wp-qty-count, .wp-multitax{text-align: right; display: block; padding-bottom: 1px; font-size: 12px; line-height: 15px;}
	.wp-qty-count,.wp-multitax{padding: 1px 0;}
	.wp-price-old{text-decoration: line-through;}

	.wp-cnt-bottom{display: flex; align-items: center; margin-top: 13px;}

	.wp-btn-delete{
		position: absolute; font-size: 0; line-height: 0; left: 0; top: 0; width: 24px; height: 24px; border-radius: 12px; background: @greenLeaf; z-index: 2; padding-top: 0.5px; .font2; display: flex; align-items: center; justify-content: center; transition: background .3s, width .3s, height .3s, padding .3s, color .3s;
		&:after{.pseudo(auto,auto); .icon-x; left: 8px; top: 8px; font: 9px/9px @fonti; color: @textColor; font-weight: bold; display: flex; align-items: center; justify-content: center; transition: color .3s}
		@media (min-width: @h){
			&:hover{
				font-size: 12px; line-height: 14px; width: auto; min-height: 24px; height: auto; color: white; background: @red; padding-left: 20px; padding-right: 8px; 
				&:after{color: white;}
			}
		}
		@media(max-width: @m){width: auto; height: auto; top: unset; left: 23px; bottom: 41px; border-radius: unset; background: unset; font-size: 12px; line-height: 14px; .font2; font-weight: bold; text-decoration: none; color: @textColor; padding: 0;
			span{padding-left: 14px; display: block;}
			&:after{left: 0; top: 3px; color: @red;}
		}
	}
</style>

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
