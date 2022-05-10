<template>
	<div class="contact-main">
		<div class="wrapper main-wrapper">
			<UiBreadcrumbs :breadcrumb="data"/>
			<h1>{{ data.title }}</h1>
			<div class="contact-row">
				<div class="contact-col contact-col1" v-if="data.content" v-html="data.content"></div>
				<div class="contact-col contact-col2">
					<div class="contact-info">
						<h4>Pomoć i informacije</h4>
						<p><a href="mailto:webshop@suplementi.hr">webshop@suplementi.hr</a></p>
					</div>
					<div class="social">
						<a class="social-item social-item-fb" href="#" target="_blank">Facebook</a>
						<a class="social-item social-item-in" href="#" target="_blank">Instagram</a>
					</div>
				</div>
				<div class="contact-col contact-col3">
					<p><img alt="" height="384" src="http://suplementi.markerdev.info/upload/2021/10/contact_6157274f7ed91.jpg" width="465"></p>
				</div>
			</div>

			<div id="mapContainer" class="map">
				<div style="display: none;" data-gmap_object_id="2" data-gmap_object_lat="45.80224621930761" data-gmap_object_lon="16.01272701349171" data-gmap_object_tooltip="_content" data-id="2" data-gmap_object_id_added="1">
					<span class="infoBox-cnt">
						<span class="title">Dicentra d.o.o.</span>
						<span class="address">Vukovarska 284 (Almeria), 10000 Zagreb</span>
						<span class="contact"><a href="mailto:webshop@suplementi.hr">webshop@suplementi.hr</a></span>
						<span class="business-hour">Pon - Pet od 9 do 17h</span>
					</span>
				</div>
			</div>

		</div>
	</div>
</template>

<style scoped lang="less">
	.contact-main{padding-top: var(--paddingTop);
		@media(max-width: @tp){
			.wrapper{margin: 0; padding-bottom: 0;}
		}
	}
	.contact-row{display: flex; border: 4px solid @gray; margin-bottom: 45px;
		@media(max-width: @l){margin-bottom: 40px;}
		@media(max-width: @t){margin-bottom: 30px;}
		@media(max-width: @tp){border: unset; margin-bottom: 20px; flex-flow: column;}
	}
	.contact-col{width: calc(~"100%/3"); border-right: 4px solid @gray;
		@media(max-width: @tp){border: unset; width: 100%;}
	}
	.contact-col1{
		font-size: 15px; line-height: 22px; padding: 20px 50px 9px; display: flex; flex-flow: column; justify-content: center;
		h4{font-size: 17px; line-height: 20px; color: @black; padding: 0 0 9px;}
		p{padding-bottom: 11px;}
		@media(max-width: @l){
			font-size: 14px; line-height: 20px;
			p{font-size: 14px; line-height: 20px; padding-bottom: 9px;}
		}
		@media(max-width: @t){padding: 17px 25px 10px; flex-grow: 1; line-height: 19px;
			p{padding-bottom: 6px; line-height: 19px;}
		}
		@media(max-width: @tp){order: 3; padding: 24px 15px 0; font-size: 14px; line-height: 22px;
			h4{font-size: 15px; line-height: 17px;}
			p{padding-bottom: 12px; font-size: 14px; line-height: 22px;}
		}
	}
	.contact-col2{
		display: flex; align-items: center; justify-content: center; flex-flow: column; text-align: center; flex: 1 1 34%;
		.contact-info{
			margin-bottom: 20px; padding-top: 52px;
			&:before{left: 50%; margin-left: -27px;}
		}
		@media(max-width: @t){width: 24%; flex: unset;
			.contact-info{padding-top: 48px;}
		}
		@media(max-width: @tp){order: 1; width: 100%; padding-bottom: 24px;}
	}
	.contact-col3{
		border-right: 0;
		p{padding: 0;}
		img{display: block;}
		@media(max-width: @t){flex-grow: 1;}
		@media(max-width: @tp){order: 2;
			img{width: 100%; max-width: 100%; max-height: 100%;}
		}
	}
</style>

<script>
	export default {
		props: ['data']
	}
</script>