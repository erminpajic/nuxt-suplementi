<template>
	<span v-html="signature"/>
</template>

<style lang="less">

</style>

<script>
export default {
	props: ['type'],
	computed: {
		signature() {
			// FIXME napraviti shared komponentu
			if(this.type == 'cms') {
				return '<a href="https://marker.hr/izrada-web-shopa/" target="_blank">Izrada web stranica:</a> <a href="https://marker.hr/" target="_blank">Marker.hr</a>'
			} else {
				return '<a href="https://marker.hr/izrada-web-shopa/" target="_blank">Izrada web shopa:</a> <a href="https://marker.hr/" target="_blank">Marker.hr</a>'
			}
		}
	}
}
</script>