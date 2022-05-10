<template>
	<ul>
		<NuxtLink custom v-slot="{href, navigate, /*isActive,*/ isExactActive}" v-for="item in menuItems" :key="item.id" :to="item.url">
			<li :class="[{'selected': isExactActive, 'has-children': item.items}, 'menu-item-'+item.url.replace(/\//g, ''), item.style]">
				<a v-if="item.url.startsWith('http')" :href="item.url" target="_blank">{{item.title}}</a>
				<a v-else :href="href" @click="navigate">
					<span>{{ item.title }}</span>
				</a>
				<div class="nav-dropdown-container" v-if="item.items">
					<div class="nav-dropdown">
						<ul class="nav-dropdown-list" v-for="subitem in item.items" :key="subitem.id">
							<li>
								<NuxtLink :to="subitem.url"><span>{{ subitem.title }}</span></NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</li>
		</NuxtLink>
	</ul>
</template>

<script>
	export default {
		computed: {
			menuItems() {
				const menu = this.$store.getters['cms/getMenu']('headless-main-menu');
				return (menu) ? menu : [];
			}
		}
	}
</script>