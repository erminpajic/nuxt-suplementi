<template>
	<!-- FIXME PROG dobivanje breadcrumbs podataka kroz api -->
	<div class="bc">
		<NuxtLink to="/">Početna</NuxtLink>
		<span>{{ breadcrumb.title }}</span>
	</div>
</template>

<style lang="less" scoped>
	.bc{
		padding: 0 0 12px; color: @textColor; font-size: 0; .font2; line-height: 14px; font-weight: bold; text-align: center;
		a, span{font-size: 12px;}
		a{
			text-decoration: none; position: relative; color: @green; padding-right: 10px; margin-right: 7px; display: inline-block; vertical-align: top; .transition(text-decoration);
			&:after{content: "/"; color: @green; display: block; width: auto; height: auto; position: absolute; right: 0; top: -1px;}
			@media (min-width: @h){
				&:hover{text-decoration: underline;}
			}
		}
		span{opacity: .5; display: inline-block; vertical-align: top;}
		@media(max-width: @tp){padding: 0 0 8px 0;
			a{padding-right: 9px; margin-right: 6px;}
		}
	}
</style>

<script>
export default {
	props: ['breadcrumb']
}
</script>