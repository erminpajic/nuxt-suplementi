<template>
	<span ref="copy"><slot/></span>
</template>

<script>
export default {
	mounted() {
		// FIXME napraviti shared komponentu
		const date = new Date();
		this.$refs.copy.innerHTML = this.$refs.copy.innerHTML.replace("%YEAR%", date.getFullYear());
	}
}
</script>