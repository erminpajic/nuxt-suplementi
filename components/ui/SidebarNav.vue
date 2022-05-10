<template>
	<ul class="nav-sidebar">
		<NuxtLink custom v-slot="{href, navigate, /*isActive,*/ isExactActive}" v-for="menuItem in sidebarMenu" :key="menuItem.id" :to="menuItem.url">
			<li :class="{'selected': isExactActive}">
				<a :href="href" @click="navigate">{{ menuItem.title }}</a>
			</li>
		</NuxtLink>
	</ul>
</template>

<style lang="less">
	.nav-sidebar{
		list-style: none; font-size: 15px; line-height: 23px; .font2; padding-bottom: 22px;
		a{
			text-decoration: none; display: inline-block; vertical-align: top; color: @black; padding: 3px 0; padding-right: 18px; position: relative;
			&:after{.pseudo(auto,auto); color: white; .icon-arrow-button; font: 7px/7px @fonti; right: 0; top: 10px; transition: color .3s ease-out, right .3s ease-out}
			@media (min-width: @h){
				&:hover{
					color: @green;
					&:after{opacity: 1; color: @green; right: -3px;}
				}
			}
		} 
		span{
			display: flex; align-items: center;
			&:after{.icon-arrow-button; font: 7px/7px @fonti; color: @green; margin: -2px 0 0 8px; opacity: 0;}
		}
		li.selected{
			a{color: #9f9f9f; pointer-events: none;}
		}
		@media(max-width: @t){
			a{padding: 2px 0; padding-right: 0;
				&:after{display: none}
			}
		}
	}

</style>

<script>
export default {
	computed: {
		sidebarMenu() {
			return this.$store.getters['cms/getMenu']('sidebar-menu')
		}
	}
}
</script>