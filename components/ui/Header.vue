<template>
	<div>
		<header class="header">
			<div class="wrapper header-wrapper">
				<NuxtLink to="/" class="logo"/>
				<ul class="nav">
					<NuxtLink custom v-slot="{href, navigate, /*isActive,*/ isExactActive}" v-for="item in menuItems" :key="item.id" :to="item.url">
						<li :class="[{'selected': isExactActive}]">
							<a v-if="item.url.startsWith('http')" :href="item.url" target="_blank"><span>{{item.title}}</span></a>
							<a v-else :href="href" @click="navigate">
								<span>{{ item.title }}</span>
							</a>
						</li>
					</NuxtLink>
				</ul>
				<div class="header-right">
					<UiSearchForm/>
					<UserBox/>
					<WebshopWidgetShoppingCart/>
				</div>
				<a href="javascript:void(0);" class="btn-toggle-nav"><span></span></a>
			</div>
			
		</header>
		<div class="responsive-cnt-mobile">
				<div class="aw-mobile">
					<div class="aw-dropdown-list logedin">
						<a href="#" class="aw-orders"><span>Moje narudžbe</span></a>
						<a href="#" class="aw-coupons"><span>Moji kuponi</span></a>
						<a href="#" class="aw-my-data"><span>Moji podaci</span></a>
						<a href="#" class="aw-new-password"><span>Uredi podatke</span></a>
					</div>
					<div class="auth-userbox login">
						<a href="#"><span></span></a>
						<a href="#"><span></span></a>
						<a href="#" data-auth_login="forgotten_password" data-siteform_response="show_hide" data-siteform_response_hide="-1"></a>
					</div>
				</div>
				<ul class="resposnive-mobile-nav">
					
				</ul>
				<div class="mobile-info">
					<div class="contact-info">
						Kontakt info
					</div>
					<div class="footer-social footer-social-mobile">
						<div class="social">
							Socials
						</div>
					</div>
				</div>
			</div>
		<div class="header-placeholder"></div>

	</div>
</template>

<script>
import HeroSlider from '../ui/HeroSlider.vue'
import UserBox from '../auth/widget/UserBox.vue'
export default {
	computed: {
		menuItems() {
			return this.$store.getters["cms/getMenu"]("headless-main-menu");
		}
	},
	components: {
		HeroSlider,
		UserBox,
	}
}
</script>

<style lang="less">

</style>