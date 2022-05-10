<template>
	<div class="page-wrapper">
		<UiHeader/>
		<component :is="component" :data="item"/>
		<UiNewsletter/>
		<UiFooter/>
	</div>
</template>

<script>
import { meta } from '@marker/meta/meta'
export default {
	data() {
		return {
			data: {}
		};
	},
	computed: {
		item() {
			const data = this.$store.getters["getData"];
			this.data = data;
			return data;
		},
		component() {
			return () => import(`@/components/${this.data.component}`);
		}
	},
	head() {
		return meta({ data: this.data });
	}
}
</script>