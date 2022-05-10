<template>
	<div class="featured-brands-cnt">
		<a href="#" class="manufacturer">
			<span><img src="http://suplementi.markerdev.info/upload/catalog/manufacturer/thumb/vimergy_61f3f675ac14a_160x70r.webp" alt=""></span>
		</a>
		<a href="#" class="manufacturer">
			<span><img src="http://suplementi.markerdev.info/upload/catalog/manufacturer/thumb/hawaiipharm_61cb62117f7e4_160x70r.webp" alt=""></span>
		</a>
		<a href="#" class="manufacturer">
			<span><img src="http://suplementi.markerdev.info/upload/catalog/manufacturer/thumb/globalhealing_61cb62035fa21_160x70r.webp" alt=""></span>
		</a>
		<a href="#" class="manufacturer">
			<span><img src="http://suplementi.markerdev.info/upload/catalog/manufacturer/thumb/resultsrna_61cb61ef3ed34_160x70r.webp" alt=""></span>
		</a>
		<a href="#" class="manufacturer">
			<span><img src="http://suplementi.markerdev.info/upload/catalog/manufacturer/thumb/thorne_61cb622fab17c_160x70r.webp" alt=""></span>
		</a>
		<a href="#" class="manufacturer">
			<span><img src="http://suplementi.markerdev.info/upload/catalog/manufacturer/thumb/gaia_61f3f64017bb2_160x70r.webp" alt=""></span>
		</a>
		<a href="#" class="manufacturer">
			<span><img src="http://suplementi.markerdev.info/upload/catalog/manufacturer/thumb/nature-s-answer_61cb622242bd3_160x70r.webp" alt=""></span>
		</a>
	</div>
</template>

<style lang="less" scoped>
	.featured-brands-cnt{display: flex; justify-content: space-between; align-items: center;
		@media(max-width: @m){display: flex; width: 100%; overflow-x: scroll; overflow-y: hidden; -webkit-overflow-scrolling: touch; padding: 0; height: auto; flex-wrap: unset; opacity: 1; visibility: visible; box-shadow: unset; flex-wrap: unset; background: white;
			&::-webkit-scrollbar{ -webkit-appearance: none; width: 3px; height: 3px; background: @greenBg; cursor: pointer; border: 0; border-radius: 0;}
			&::-webkit-scrollbar-track-piece{margin: 0 15px;}
			&::-webkit-scrollbar-track{border-left: 15px solid white; border-right: 15px solid white; border-top: 0; border-bottom: unset;}
			&::-webkit-scrollbar-thumb{background-color: @green; cursor: pointer; border-radius: 0 !important;}
		}
	}
	.manufacturer{
		width: auto; display: flex; align-items: center; justify-content: center; position: relative; background: white;
		img{display: block; height: auto; width: auto; max-width: 160px; max-height: 70px; z-index: 100; filter:grayscale(0%); .transition(filter);}
		@media (min-width: @h){
			&:hover{
				img{filter:grayscale(100%);}
			}
		}
		@media(max-width: @l){
			img{max-width: 120px; max-height: 55px;}
		}
		@media(max-width: @t){
			img{max-width: 125px; max-height: 50px;}
		}
		@media(max-width: @tp){
			img{max-width: 100px; max-height: 40px;}
		}
		@media(max-width: @m){border-radius: unset !important; padding: 0 12px; width: 100%; margin-bottom: 12px;
			&:first-child{margin-left: 15px; padding-left: unset;}
			&:last-child{padding-right: 0; margin-right: 15px;}
		}
	}
</style>
