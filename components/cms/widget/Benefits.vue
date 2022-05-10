<template>
	<div class="benefits">
		<div class="benefits-images-cnt">
			<div class="benefits-images">
				<div class="benefit-image benefit-image-left">
					<p><img alt="Benefit zona1" height="550" src="http://suplementi.markerdev.info/upload/2021/10/benefit-zona1_617a6ec72b76c.jpg" width="400"></p>
				</div>
				<div class="benefit-image benefit-image-right">
					<p><img alt="" height="550" src="http://suplementi.markerdev.info/upload/2021/10/benefit-zona2_617a6ee3e5edd.jpg" width="400"></p>
				</div>
			</div>
		</div>
		<div class="wrapper benefits-wrapper">
			<div class="benefits-inner">
				<div class="benefits-inner-cnt">
					<div class="hp-headline benefits-main-headline">Pokreni snagu prirode</div>
					<h2 class="hp-title benefits-main-title">Zašto kupovati na suplementi.hr?</h2>
					<a class="benefit-item hp-benefit benefit-item-1" href="#">
						<span>Besplatna dostava</span>
						<p>za sve narudžbe iznad 500 kn</p>
					</a>
					<a class="benefit-item hp-benefit benefit-item-2">
						<span>Brza i sigurna dostava</span>
						<p>u roku 3 - 5 radnih dana</p>
					</a>
					<a class="benefit-item hp-benefit benefit-item-3" href="#">
						<span>Mogućnosti plaćanja</span>
						<p>karticom, internet bankastvom i gotovinom</p>
					</a>
					<a class="benefit-item hp-benefit benefit-item-4" href="#">
						<span>Besplatno savjetovanje</span>
						<p>javi se se na <i>webshop@suplementi.hr</i></p>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
	.benefits-images-cnt{
		@media(max-width: @tp){position: relative; overflow: hidden;}
	}
	.benefit-item{
		position: relative; padding-left: 80px; font-size: 12px; line-height: 15px; display: flex; justify-content: center; flex-flow: column; min-height: 64px; margin-bottom: 15px; text-decoration: none; color: @textColor;
		&:before{.pseudo(64px,64px); left: 0; border: 4px solid @greenBg; border-radius: 50%; .icon-free-shipping; font: 26px/26px @fonti; top: 0; display: flex; align-items: center; justify-content: center; color: @green; transition: border-color .3s, background .3s, color .3s;}
		span{display: block; .font2; font-weight: bold; font-size: 15px; line-height: 17px; padding-bottom: 3px; .transition(color);}
		&:last-child{margin-bottom: 0;}
		@media(max-width: @t){ padding-left: 70px; margin-bottom: 10px; min-height: 54px;
			&:before{width: 54px; height: 54px; font: 20px/20px @fonti;}
		}
		@media(max-width: @tp){padding-left: 72px; margin-bottom: 12px; min-height: 60px;
			&:before{width: 60px; height: 60px; font: 23px/23px @fonti;}
		}
	}
	a.benefit-item{
		@media (min-width: @h){
			&:hover{
				color: @textColor;
				span{color: @green;}
				&:before{background: @green; border-color: @green; color: white;}
			}
		}
	}
	.benefit-item-2{
		&:before{.icon-fast-shipping; font: 21px/21px @fonti;}
		@media(max-width: @t){
			&:before{font: 17px/17px @fonti;}
		}
		@media(max-width: @tp){
			&:before{font: 20px/20px @fonti;}
		}
	}
	.benefit-item-3{
		&:before{.icon-returns; font: 22px/22px @fonti;}
		@media(max-width: @t){
			&:before{font: 18px/18px @fonti;}
		}
		@media(max-width: @tp){
			&:before{font: 21px/21px @fonti;}
		}
	}
	.benefit-item-4{
		&:before{.icon-payments; font: 24px/24px @fonti;}
		@media(max-width: @t){
			&:before{font: 20px/20px @fonti;}
		}
		@media(max-width: @tp){
			&:before{font: 24px/24px @fonti;}
		}
	}
	.benefit-item-5{
		&:before{.icon-contact; font: 26px/26px @fonti;}
		@media(max-width: @t){
			&:before{font: 22px/22px @fonti;}
		}
		@media(max-width: @tp){
			&:before{font: 25px/25px @fonti;}
		}
	}

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
		&:before{.pseudo(304px,282px); right: -105px; bottom: -110px; background: url(~/assets/images/faq-leaf.png) left no-repeat;}
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
</style>