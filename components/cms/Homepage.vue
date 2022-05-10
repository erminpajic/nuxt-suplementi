<template>
	<div>
		<HeroSlider/>
		<div class="wrapper hp-manufacturer-wrapper">
			<Manufacturers/>
		</div>
		<Benefits/>
	</div>
</template>

<style lang="less">
	.page-homepage{
		h1{opacity: 0; visibility: hidden; position: absolute; padding: 0; font-size: 0; line-height: 0;}
	}
	.main-slider{
		&.slick-initialized{
			.ms-inner-content-cnt{visibility: visible; opacity: 1;}
			.ms-item{display: block !important;}
		}
		img{display: block; width: auto; height: auto; max-width: 100%; max-width: 100%;}
		.slick-prev,.slick-next{
			width: 80px; height: 80px; top: 50%; margin-top: -40px;
			&:after{font: 23px/23px @fonti;}
		}
		.slick-next{right: 60px;}
		.slick-prev{left: 60px;}
		@media(max-width: @d1){
			.slick-next{right: 30px;}
			.slick-prev{left: 30px;}
		}
		@media(max-width: @l){
			.slick-prev,.slick-next{
				width: 60px; height: 60px; margin-top: -30px;
				&:after{font: 17px/17px @fonti;}
			}
			.slick-next{right: 20px;}
			.slick-prev{left: 20px;}
		}
		@media(max-width: @t){
			.slick-prev,.slick-next{
				width: 54px; height: 54px; margin-top: -22px;
				&:after{font: 15px/15px @fonti;}
			}
		}
		@media(max-width: @tp){
			.slick-dots{position: absolute; bottom: 15px; left: 15px; right: 15px; padding: 0;
				li{margin: 0 5px; font-size: 0; line-height: 0;
					&.slick-active{
						button{background: @green;}
					}
				}
				button{width: 40px; height: 4px; background: white; border-radius: 2px; border: unset;}
			}
		}
	}
	.ms-item{
		display: block; width: 100%; height: auto;
		&:not(:first-child){display: none;}
	}
	.ms-content-container{position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; flex-flow: column; padding-top: 160px; padding-bottom: 120px; color: @white; max-width: @wrapper; margin: 0 auto;
		@media(max-width: @d1){padding-top: 100px; padding-bottom: 110px; max-width: 1310px;}
		@media(max-width: @l){max-width: unset; margin: 0 100px; padding-top: 90px; padding-bottom: 70px;}
		@media(max-width: @t){margin: 0 105px; padding: 45px 0; justify-content: center;}
		@media(max-width: @tp){margin: 0 15px; padding: 32px 0 70px; }
		@media(max-width: @m){justify-content: unset;}
	}
	.ms-inner-content-cnt{width: 490px; visibility: hidden; opacity: 0;
		@media(max-width: @l){width: 405px;}
		@media(max-width: @t){width: 50%;}
		@media(max-width: @tp){width: 60%;}
		@media(max-width: @m){width: 205px;}
	}
	.ms-headline{display: block; padding-bottom: 6px; color: @green; .font2;  font-weight: bold; font-size: 17px; line-height: 21px; 
		@media(max-width: @t){font-size: 16px; line-height: 20px; padding-bottom: 3px;}
		@media(max-width: @tp){font-size: 14px; line-height: 18px; padding-bottom: 2px;}
	}
	.ms-title{display: block; font-size: 62px; line-height: 68px; font-weight: bold; padding-bottom: 10px; padding-top: 0; color: @blue;
		@media(max-width: @l){font-size: 48px; line-height: 55px;}
		@media(max-width: @t){font-size: 42px; line-height: 48px;}
		@media(max-width: @tp){font-size: 28px; line-height: 34px; padding-bottom: 5px;}
	}
	.ms-content{position: relative; display: block; font-size: 20px; line-height: 28px; color: @textColor;
		@media(max-width: @l){font-size: 17px; line-height: 24px;}
		@media(max-width: @tp){font-size: 14px; line-height: 21px;}
	}
	.ms-btn{margin-top: 22px;
		@media(max-width: @t){margin-top: 15px;}
	}

	.hp-headline{font-size: 15px; line-height: 18px; padding-bottom: 6px; color: @green; .font2; text-align: center; font-weight: bold;
		@media(max-width: @tp){font-size: 13px; line-height: 16px;}
	}
	.hp-title{text-align: center; padding-top: 0; color: @blue;}

	//manufacturers
	.hp-manufacturer-wrapper{padding: 50px 0 55px;
		/*.manufacturer{
			img{filter:grayscale(100%); opacity: .6; transition: filter .3s, opacity .3s}
			@media (min-width: @h){
				&:hover{
					img{filter:grayscale(0%); opacity: 1;}
				}
			}
		}*/
		@media(max-width: @l){padding: 45px 0;}
		@media(max-width: @t){padding: 35px 0;
			/*.manufacturer{
				img{opacity: 1; filter:grayscale(0%);}
			}*/
		}
		@media(max-width: @tp){padding: 24px 0;}
		@media(max-width: @m){margin: 0;}
	}

	//benefits
	.benefits{position: relative; overflow: hidden;}
	.benefits-images{
		width: 50%; height: auto; position: absolute; top: 0px; left: 0px; bottom: 0; background-color: rgba(208,224,201,0.3);
		img{display: block; max-width: 100%; width: auto; height: auto;}
		&:before{position: absolute; .icon-leaf2; font: 654px/654px @fonti; color: @greenLeaf; right: 540px; top: 150px;}
		&:after{position: absolute; .icon-leaf; font: 760px/760px @fonti; color: @greenLeaf; right: -110px; top: 39px;}
		@media(max-width: @l){
			&:before{font: 542px/542px @fonti; top: 124px; left: 10px;}
			&:after{top: 32px; right: -88px; font: 635px/635px @fonti;}
		}
		@media(max-width: @t){
			&:before{font: 457px/457px @fonti; left: -50px; top: 98px;}
			&:after{font: 532px/532px @fonti; right: -60px; top: 20px;}
		}
		@media(max-width: @tp){width: 100%; position: static; display: flex; padding: 25px 15px; overflow: hidden;
			&:before{font: 386px/386px @fonti; left: -13px; top: 17px;}
			&:after{font: 352px/352px @fonti; right: -113px; top: 13px}
			img{width: 100%;}
		}
	}

	.benefit-image{
		position: absolute; z-index: 1; box-shadow: 0 10px 50px 0 rgba(0,0,0,0.2);
		p{padding: 0;}
		@media(max-width: @l){max-width: 330px; max-height: 454px;}
		@media(max-width: @t){max-width: 280px; max-height: 385px;}
		@media(max-width: @tp){max-width: 100%; max-height: 100%; width: 100%; position: static;}

	}
	.benefit-image-left{top: 160px; right: 305px;
		@media(max-width: @l){top: 132px; right: unset; left: 100px;}
		@media(max-width: @t){top: 112px; left: 30px;}
		@media(max-width: @tp){margin-top: 34px;}
		
	}
	.benefit-image-right{
		top: 90px; right: 105px;
		&:before{.pseudo(304px,282px); right: -105px; bottom: -110px; background: url(~assets/images/faq-leaf.png) left no-repeat;}
		@media(max-width: @l){top: 75px; right: 88px;
			&:before{width: 220px; height: 200px; right: -70px; bottom: -70px; background-size: contain;}
		}
		@media(max-width: @t){top: 63px; right: 45px;
			&:before{width: 225px; height: 190px; right: -75px; bottom: -75px;}
		}
		@media(max-width: @tp){align-self: baseline; margin-left: -100px;
			&:before{display: none;}
		}
	}
	.benefits-inner{max-width: 50%; margin-left: auto; padding: 95px 0 105px 150px;
		@media(max-width: @l){padding: 50px 0 80px 125px;}
		@media(max-width: @t){padding: 45px 0 45px 80px;}
		@media(max-width: @tp){max-width: unset; padding: 24px 0 0;}
	}

	.hp-benefit{
		margin-bottom: 18px !important; padding-left: 90px !important; min-height: 74px !important;
		&:before{width: 74px; height: 74px; font: 33px/33px @fonti;}
		p{padding-bottom: 0; font-size: 14px; line-height: 18px;}
		span{font-size: 17px; line-height: 21px;}
		i{font-style: normal; text-decoration: underline; text-underline-offset: 2px; text-decoration-color: @green;}
		@media (min-width: @h){
			&:hover{
				i{text-decoration: none;}
			}
		}
		&.benefit-item-2{
			&:before{font: 27px/27px @fonti;}
		}
		&.benefit-item-3{
			&:before{font: 26px/26px @fonti;}
		}
		&.benefit-item-4{
			&:before{font: 30px/30px @fonti;}
		}
		&.benefit-item-5{
			&:before{font: 26px/26px @fonti;}
		}
		@media(max-width: @t){min-height: 60px !important; margin-bottom: 12px !important; padding-left: 75px !important;
			&:before{width: 60px; height: 60px; font: 27px/27px @fonti;}
			&.benefit-item-2{
				&:before{font: 21px/21px @fonti;}
			}
			&.benefit-item-3{
				&:before{font: 21px/21px @fonti;}
			}
			&.benefit-item-4{
				&:before{font: 24px/24px @fonti;}
			}
			&.benefit-item-5{
				&:before{font: 21px/21px @fonti;}
			}
		}
		@media(max-width: @tp){
			min-width: unset !important;
			span{font-size: 15px; line-height: 18px;}
			p{font-size: 13px; line-height: 17px;}
			&:before{font: 25px/25px @fonti;}
			&.benefit-item-2{
				&:before{font: 20px/20px @fonti;}
			}
			&.benefit-item-3{
				&:before{font: 22px/22px @fonti;}
			}
			&.benefit-item-4{
				&:before{font: 25px/25px @fonti;}
			}
			&.benefit-item-5{
				&:before{font: 21px/21px @fonti;}
			}
		}
	}
	.benefits-main-headline{text-align: left;}
	.benefits-main-title{padding-bottom: 28px; text-align: left;
		@media(max-width: @t){padding-bottom: 18px;}
		@media(max-width: @tp){font-size: 24px; line-height: 30px; padding-bottom: 15px;}
	}
	.benefits-inner-cnt{width: 360px;
		@media(max-width: @t){width: auto;}
	}

	//list
	.cw-catalog-homepage{
		padding: 125px 0 110px !important; border-bottom: unset !important; margin-bottom: 0 !important; position: relative;
		&:before{.pseudo(450px,275px); right: 0; top: -120px; background: url(~/assets/images/element-leaf.jpg) top left no-repeat; background-size: contain; z-index: -1;}
		.cw-headline{padding-bottom: 5px;}
		@media(max-width: @l){padding: 115px 0 100px !important;
			&:before{width: 400px; height: 245px; top: -100px;}
		}
		@media(max-width: @t){padding: 90px 0 70px !important;
			&:before{width: 320px; height: 195px; top: -20px}
		}
		@media(max-width: @tp){padding: 32px 0 46px !important;
			&:before{display: none;}
		}
	}

	//other cat
	.hp-other-cat{
		padding: 0 0 160px !important; border: unset !important;
		@media(max-width: @l){padding: 0 0 145px !important;}
		@media(max-width: @t){padding: 0 0 100px !important;}
		@media(max-width: @tp){padding: 0 0 55px !important;
			.wrapper{margin: 0;}
		}
	}
	.hp-other-cat-wrapper{
		padding: 0 25px 0 30px;
		@media(max-width: @l){padding: 0;}
	}

	//promos
	.hp-promos{
		position: relative; padding-bottom: 140px;
		&:before{.pseudo(450px,275px); left: 0; top: -120px; background: url(~assets/images/element-leaf2.jpg); z-index: -1; background-size: contain;}
		@media(max-width: @l){
			padding-bottom: 120px;
			&:before{width: 400px; height: 245px; top: -100px}
		}
		@media(max-width: @t){padding-bottom: 70px;
			&:before{width: 320px; height: 196px; top: -90px;}
		}
		@media(max-width: @tp){padding-bottom: 48px;
			&:before{display: none;}
		}
	}
	.hp-promos-wrapper{max-width: 1440px;
		@media(max-width: @l){max-width: unset;}
	}
	.hp-promo-main-intro{padding-bottom: 120px;
		@media(max-width: @l){padding-bottom: 90px;}
		@media(max-width: @t){padding-bottom: 80px;}
		@media(max-width: @tp){padding-bottom: 60px;}
		@media(max-width: @m){padding-bottom: 24px;}
	}
	.hp-promo-main-title{padding-bottom: 0;}
	.hp-promos-slider{display: flex;
		@media(max-width: @m){display: block; margin: 0 0 0 15px;}
	}
	.hp-promo{
		display: flex; margin-right: 75px; width: 430px; flex-flow: column; text-decoration: none;
		&:last-child{margin-right: 0;}
		&:nth-child(2){margin-top: -40px;}
		&:nth-child(3){margin-top: -80px;}
		@media(max-width: @l){margin-right: 57px; width: calc(~"100%/3");
			&:nth-child(2){margin-top: -30px;}
			&:nth-child(3){margin-top: -60px;}
		}
		@media(max-width: @t){margin-right: 45px;
			&:nth-child(2){margin-top: -25px;}
			&:nth-child(3){margin-top: -50px;}
		}
		@media(max-width: @tp){margin-right: 35px;
			&:nth-child(2){margin-top: -20px;}
			&:nth-child(3){margin-top: -40px;}
		}
		@media(max-width: @m){margin-right: 0; width: 100%; margin-bottom: 40px;
			&:nth-child(2){margin-top: 0;}
			&:nth-child(3){margin-top: 0;}
			&:last-child{margin-bottom: 0;}
		}
	}
	.hp-promo-img{
		margin-left: 30px; position: relative;
		&:before{.pseudo(auto,auto); top: 70px; left: -30px; right: 60px; background: @borderHover; bottom: -30px; z-index: -1;}
		span{display: block; box-shadow: 0 10px 40px 0 rgba(0,0,0,0.15); .transition(box-shadow);}
		img{display: block; width: auto; height: auto; max-width: 100%; max-height: 100%;}
		@media(max-width: @t){margin-left: 0;
			&:before{top: 35px; left: -15px; bottom: -15px; right: 28px;}
		}
		@media(max-width: @tp){
			&:before{top: 43px; right: 30px;}
		}
	}
	.hp-promo-cnt{padding: 65px 60px 0;
		@media(max-width: @l){padding: 65px 40px 0;}
		@media(max-width: @t){padding: 40px 15px 0;}
		@media(max-width: @tp){padding: 30px 5px 0;}
		@media(max-width: @m){padding: 30px 15px 0 0;}
	}
	.hp-promo-title{font-size: 25px; line-height: 32px; font-weight: bold; .font2; color: @blue; padding-bottom: 10px; .transition(color);
		@media(max-width: @t){font-size: 23px; line-height: 30px; padding-bottom: 8px;}
		@media(max-width: @tp){font-size: 18px; line-height: 22px; padding-bottom: 6px;}
	}
	.hp-promo-content{color: @textColor;}
	.hp-promo-link{
		margin-top: 15px; color: @textColor; .font2; font-weight: bold; font-size: 15px; line-height: 18px; .transition(color);
		span{
			position: relative; padding-right: 23px;
			&:after{.pseudo(auto,auto); .icon-arrow-button; font: 7px/7px @fonti; top: 6px; right: 0; color: @green; .transition(right);}
		}
		@media(max-width: @t){margin-top: 12px;}
		@media(max-width: @tp){font-size: 14px; line-height: 18px;
			span{padding-right: 18px;
				&:after{font: 6px/6px @fonti; top: 7px;}
			}
		}
	}
	a.hp-promo{
		@media (min-width: @h){
			&:hover{
				.hp-promo-link{
					color: @green;
					span:after{right: -3px;}
				}
				.hp-promo-img{
					span{box-shadow: 0 15px 40px 0 rgba(0,0,0,0.25);}
				}
				.hp-promo-title{color: @green;}
			}
		}
	}

	//blog
	.hp-blog{
		padding: 118px 0 130px;
		.main-wrapper{max-width: 1650px; padding-bottom: 0;}
		@media(max-width: @d1){
			.main-wrapper{max-width: 1550px;}
		}
		@media(max-width: @l){
			padding: 100px 0 110px;
			.main-wrapper{max-width: unset; margin: 0 40px;}
		}
		@media(max-width: @t){padding: 60px 0 30px;
			.main-wrapper{margin: 0;}
			.p-wrapper{margin: 0 30px;}
		}
		@media(max-width: @tp){padding: 48px 0 15px;
			.main-wrapper{margin: 0 15px;}
			.p-wrapper{margin: 0 15px;}
		}
	}
	.hp-related-posts-intro{padding-left: 15px; padding-right: 15px;}
	.hp-blog-title{padding-bottom: 60px;
		@media(max-width: @t){padding-bottom: 40px;}
		@media(max-width: @tp){padding-bottom: 24px;}
	}
	.hp-blog-items{
		flex-wrap: unset; justify-content: center;
		.pp{margin-bottom: 0;}
	}
	.hp-blog-all-cnt{text-align: center; padding-bottom: 80px; padding-top: 50px;
		@media(max-width: @l){padding-top: 40px;}
		@media(max-width: @t){padding: 40px 0 60px;}
		@media(max-width: @tp){padding: 0 0 40px;}
	}
	.btn-hp-blog-all{border-color: white;}
</style>

<script>
import HeroSlider from '../ui/HeroSlider.vue'
import Manufacturers from '../catalog/widget/Manufacturers.vue'
import Benefits from '../cms/widget/Benefits.vue'

export default {
	props: ['data'],
	components: {
		HeroSlider,
		Manufacturers,
		Benefits
	}
}
</script>