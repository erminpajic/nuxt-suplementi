<template>
	<div class="main">
		<div class="wrapper main-wrapper">
			<div class="main-content">
				<UiBreadcrumbs :breadcrumb="data"/>
				<h1>{{ data.seo_h1 }}</h1>
				<div v-html="data.content" v-interpolation></div>
			</div>

			<aside class="sidebar">
				<div class="sidebar-inner">
					<UiSidebarNav/>
					<div class="contact-info">
						<h4>Pomoć i informacije</h4>
						<p><a href="mailto:webshop@suplementi.hr">webshop@suplementi.hr</a></p>
					</div>
					<div class="sidebar-social social">
						<a class="social-item social-item-fb" href="#" target="_blank">Facebook</a>
						<a class="social-item social-item-in" href="#" target="_blank">Instagram</a>	
					</div>
				</div>
			</aside>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.list{
		list-style: none; padding: 0; margin: 0 0 15px 15px;
		li{
			position: relative; padding: 2px 0 2px 20px;
			&:before{.pseudo(8px, 8px); background: @green; top: 10px; left: 0; border-radius: 100%;}
		}
		@media(max-width: @tp){margin: 0 0 15px 10px;
			li{padding: 2px 0 2px 16px;
				&:before{width: 6px; height: 6px; top: 9px;}
			}
		}
	}

	.page-cms{
		.bc, h1{text-align: left;}
		.main-content{max-width: @wrapperSmall; min-height: 80vh;}
		@media(max-width: @t){
			.main-content{min-height: 70vh; max-width: unset; padding-right: 270px;}
		}
		@media(max-width: @tp){
			.main-content{min-height: unset; padding-right: 0;}
		}
	}
	.main-wrapper{padding-bottom: var(--paddingBottom);}
	.main-content{padding: 65px 0 0;
		@media(max-width: @l){padding: 55px 0 0;}
		@media(max-width: @t){padding: 35px 0 0;}
		@media(max-width: @tp){padding: 25px 0 0;}
	}
	.cms-content{
		ul{.list;}
		ol{margin: 0 0 20px 35px;
			li{padding: 4px 0;}
		}
		.btn{margin-top: 15px; margin-right: 10px;} 
		@media(max-width: @tp){
			ol{margin: 0 0 15px 26px;
				li{padding: 2px 0;}
			}
			.btn{margin-top: 8px; margin-right: 8px;}
		}
	}

</style>

<script>
	export default {
		props: ['data'],
		mounted () {
			setTimeout(() => {
				document.body.classList.add('page-cms')
			},100)
		},
	}
	
</script>