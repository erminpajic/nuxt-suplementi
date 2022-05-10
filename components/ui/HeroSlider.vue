<template>
	<!--
	<div class="menu-slider-item" v-for="slide in slider" :key="slide.id">
		<img loading="lazy" :src="slide.image" alt="">
	</div>
	-->
	<div class="splide menu-slider">
		<div class="splide__track">
			<div class="splide__list">
				<div class="splide__slide menu-slider-item" v-for="slide in slider" :key="slide.id">
					<img loading="lazy" :src="slide.image" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	
</style>

<script>
import Splide from '@splidejs/splide';
export default {
	computed: {
		slider() {
			return this.$store.getters['cms/getRotator']('homepage');
		}
	},
	mounted() {
		new Splide('.splide', {
			//direction: "ttb",
			//height: 500
			//perPage: 2
			type: 'fade',
			pagination: false,
			rewind: true
			//autoplay: true
		}).mount();
	}
}
</script>