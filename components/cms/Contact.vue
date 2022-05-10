<template>
	<div>
		<h1>{{ data.title }}</h1>
		<div v-if="data.content" v-html="data.content"></div>
	</div>
</template>

<script>
	export default {
		props: ['data']
	}
</script>