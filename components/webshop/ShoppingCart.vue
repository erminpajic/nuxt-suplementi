<template>
	<div class="cart-layout">
		<div class="wrapper">
			<div class="clear" id="view_cart">
				<div class="w-title-cnt">
					<!--<UiBreadcrumbs :breadcrumb="data"/>-->
					<h1 class="w-title">{{ data.seo_h1 }}</h1>
					<span class="w-counter" data-active-cart>(<ShoppingCartCounter/>)</span>
				</div>
				<!--<div v-html="data.content" v-interpolation></div>-->
				<div class="w-cols">
					<div class="w-col1">
						<div class="w-table">
							<ShoppingCartEntry v-for="item in cartItems" :item="item" :key="item.line"/>
						</div>
						<div class="w-col1-bottom">
							<div class="webshop-faq-cnt">
								<div class="webshop-faq">
									<div class="faq-item webshop-faq-item" :class="{ active: clicked }">
										<div class="faq-title webshop-faq-title" @click="clicked = !clicked"><span class="faq-just-title">Dozvoljavate li narudžbe u inozemstvo?<div class="plus"></div></span></div>
										<div class="faq-content webshop-faq-content"><div class="cms-content">Trenutno vršimo dostavu samo na području republike Hrvatske.</div></div>
									</div>
									<div class="faq-item webshop-faq-item" :class="{ active: clicked }">
										<div class="faq-title webshop-faq-title" @click="clicked = !clicked"><span class="faq-just-title">Što se događa nakon što izvršim narudžbu?<div class="plus"></div></span></div>
										<div class="faq-content webshop-faq-content"><div class="cms-content">Na e-mail adresu koju ste upisali u kontaktnom obrascu će vam stići informacije o vašoj narudžbi i plaćanju. Ukoliko će biti potrebe, naš će vas odjel prodaje osobno kontaktirati u najkraćem mogućem roku kako bi dogovorile detalje narudžbe, pojedinosti oko plaćanja, izdavanja računa i slanja paketa.</div></div>
									</div>
								</div>
								<div class="cd-faq-info webshop-faq-info">
									Niste pronašli odgovor? <span>Kontaktirajte nas!</span>
									<a href="mailto:webshop@suplementi.hr">webshop@suplementi.hr</a>
								</div>
							</div>
						</div>
					</div>
					<div class="w-col2">
						<div class="w-col2-all-cnt">
							<div class="w-totals-coupons-cnt">
								<!-- Coupon -->
								<div class="cart-coupons">
									Kuponi
								</div>
								<!-- Totals -->
								<div class="w-totals-cnt">
									<h2 class="w-totals-title">Ukupno u košarici</h2>
									<ShoppingCartTotal class="cart-totals"/>
									<a class="btn btn-blue btn-arrow w-btn-finish" href="https://b2b.cotra.hr/webshop/placanje/#webshop_form"><span>Dovrši kupnju</span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.cart-layout{padding-top: var(--paddingTop); padding-bottom: var(--paddingBottom);
		@media(max-width: @tp){padding-bottom: 0;
			.wrapper{margin: 0;}
		}
	}
	.w-title-cnt{padding-bottom: 20px; display: flex; align-items: flex-end; width: 100%; flex-grow: 1;
		@media(max-width: @t){padding-bottom: 4px;}
		@media(max-width: @tp){padding-bottom: 15px; padding-left: 15px; padding-right: 15px;}
	}
	.w-title{padding-bottom: 0; position: relative; padding-top: 0;}
	.w-counter{position: relative; display: block; margin-left: 7px; margin-bottom: 9px; font-size: 17px; line-height: 20px; color:@grayText; font-weight: bold; .font2;
		@media(max-width: @tp){margin-bottom: 2px; font-size: 14px; line-height: 18px; margin-left: 5px;}
	}
	.w-cols{display: flex; padding-right: 0;
		@media(max-width: @tp){display: block;}
	}
	.w-col1{width: 840px; margin-right: 120px;
		@media(max-width: @l){width: auto; flex-grow: 1; margin-right: 75px;}
		@media(max-width: @t){margin-right: 30px; padding-top: 14px;}
		@media(max-width: @tp){margin-right: 0; padding-top: 0; width: auto;}
	}
	.w-col2{width: auto; flex-shrink: 0; flex-grow: 1; position: relative;}
	
	.w-col2-all-cnt{width: 450px; flex-shrink: 0; position: relative; z-index: 2;
		@media(max-width: @l){width: 380px;}
		@media(max-width: @t){width: 335px;}
		@media(max-width: @tp){width: auto;}
	}
	.w-totals-coupons-cnt{padding: 40px 45px; border: 1px solid @inputGray;
		@media(max-width: @l){padding: 40px;}
		@media(max-width: @t){padding: 30px 30px 25px 30px;}
		@media(max-width: @tp){border: unset; padding: 24px 15px;}
	}
	.w-totals-cnt{padding-top: 35px;
		@media(max-width: @t){padding-top: 25px;}
		@media(max-width: @tp){padding-top: 24px;}
	}
	.w-totals-title{font-size: 25px; line-height: 32px; font-weight: bold; .font2; padding-bottom: 10px; padding-top: 0;
		@media(max-width: @t){font-size: 22px; line-height: 28px;}
		@media(max-width: @tp){font-size: 20px; line-height: 24px; padding-bottom: 8px;}
	}
	.w-totals-label{font-size: 12px; line-height: 22px;}
	.w-totals-value{font-size: 12px; line-height: 22px;}
	.cart-total{
		.w-totals-label,.w-totals-value{font-weight: bold; font-size: 16px;}
		@media(max-width: @tp){font-size: 14px;}
	}
	.cart-total-without-tax,.cart-total-tax{
		align-items: baseline !important;
		.w-totals-value{
			display: flex; flex-flow: column;
			small{font-size: 10px; display: block; text-align: right;}
		}
	}
	.cart-total-shipping{
		.w-totals-value{color: @green; font-weight: bold;}
	}
	.w-btn-finish{width: 100%; margin: 0; color: white; margin-top: 17px; line-height: 20px;
		@media(max-width: @t){margin-top: 14px;}
		@media(max-width: @tp){margin-top: 12px;}
	}
	.c-total-cnt{display: flex; flex-flow: row; justify-content: space-between; align-items: center;}

	.empty-cart{text-align: center; max-width: 800px; margin: 0 auto;
		@media(max-width: @tp){max-width: unset; padding-bottom: 24px; padding-left: 15px; padding-right: 15px;}
	}

	//faq
	.webshop-faq-cnt{padding-top: 25px;
		@media(max-width: @l){padding-top: 20px;}
		@media(max-width: @t){padding-top: 12px;}
		@media(max-width: @tp){display: none; padding-top: 0;}
	}
	.webshop-faq-cnt-mobile{display: none;
		@media(max-width: @tp){display: block;}
	}
	.webshop-faq-item{ 
		border-bottom: 1px solid @inputGray;
		&.active{
			.webshop-faq-content{max-height: 5000px; visibility: visible; opacity: 1; padding-bottom: 10px; padding-top: 10px;}
			.webshop-faq-title{color: @green; padding-bottom: 0;
				.plus:after{display: none;}
			}
		}
		&:last-child{border-bottom: unset !important;}
		@media(max-width: @tp){border-top: 1px solid @borderColor; margin-top: -1px;
			&.active{
				.webshop-faq-title{padding-bottom: 14px;}
				.webshop-faq-content{padding-bottom: 8px; padding-top: 0;}
			}
		}
	}
	.webshop-faq-title{
		font-size: 17px; line-height: 20px; .font2; color: @textColor; font-weight: bold; padding: 20px 0 20px 24px; position: relative; cursor: pointer; transition: color .3s, padding .3s;
		.plus{top: 28px; left: 0;}
		@media (min-width: @h){
			&:hover{color: @green;}
		}
		@media(max-width: @tp){font-size: 15px; line-height: 18px; padding: 14px 15px 14px 37px;
			.plus{left: 15px; top: 21px; width: 12px; 
				&:after{width: 12px;}
			}
		}
	}
	.webshop-faq-content{
		max-height: 0; transition: max-height .3s ease-out, visibility .3s ease-out, opacity .3s ease-out, padding .3s ease-out; visibility: hidden; opacity: 0; padding-left: 24px;
		p{padding-bottom: 10px; font-size: 14px; line-height: 20px;}
		ul{
			li{
				font-size: 14px; line-height: 20px;
				&:before{width: 7px; height: 7px; top: 8px;}
			}
		}
		ol{
			li{font-size: 14px; line-height: 20px;}
		}
		@media(max-width: @tp){padding-left: 37px; padding-right: 15px;
			ul{
				li{
					font-size: 14px; line-height: 21px;
					&:before{width: 6px; height: 6px; top: 9px;}
				}
			}
			ol{
				li{font-size: 14px; line-height: 21px;}
			}
		}
	}
	.webshop-faq-info{border: 1px solid @inputGray; margin-top: 20px;
		@media(max-width: @t){display: flex; flex-wrap: wrap; padding: 24px 50px; border-radius: 45px;
			a{width: 100%; padding-left: 0; text-align: center; margin-top: 5px;
				&:before{display: none;}
			}
		}
		@media(max-width: @tp){border-radius: unset; margin: 0; padding: 15px; border-left: unset; border-right: unset; border-bottom: unset;}
	}
	.w-benefit{padding: 40px 70px 0;
		@media(max-width: @l){padding: 40px 35px 0;}
		@media(max-width: @t){padding: 30px 18px 0;}
		@media(max-width: @tp){padding: 0; width: 239px; margin: 0 auto 32px;}
	}

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
	},
	data () {
		return {
			clicked: false
		}
	}
}
</script>