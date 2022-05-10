<template>
	<footer class="footer">
		<div class="footer-images-cnt">
			<div class="footer-images">
				<div class="footer-image footer-image-left">
					<img src="http://suplementi.markerdev.info/upload/2021/10/bg-footer1_615702975c049.jpg" alt="">
				</div>
				<div class="footer-image footer-image-right">
					<img src="http://suplementi.markerdev.info/upload/2021/10/bg-footer2_615702bb13047.jpg" alt="">
				</div>
			</div>
		</div>
		<div class="wrapper footer-wrapper">
			<div class="footer-inner">
				<div class="footer-navs">
					<div class="footer-nav-cnt">
						<h4 class="footer-title">Suplementi.hr<span class="plus"></span></h4>
						<ul class="footer-nav">
							<NuxtLink custom v-slot="{href, navigate, /*isActive,*/ isExactActive}" v-for="item in footerCol1Menu" :key="item.id" :to="item.url">
								<li :class="[{'selected': isExactActive}]">
									<a v-if="item.url.startsWith('http')" :href="item.url" target="_blank"><span>{{item.title}}</span></a>
									<a v-else :href="href" @click="navigate">
										<span>{{ item.title }}</span>
									</a>
								</li>
							</NuxtLink>
						</ul>
					</div>
					<div class="footer-nav-cnt">
						<h4 class="footer-title">Uvjeti kupnje<span class="plus"></span></h4>
						<ul class="footer-nav">
							<li><a href="">Predugovorne obavijesti</a></li>
							<li><a href="">Dostava</a></li>
							<li><a href="">Način plaćanja</a></li>
							<li><a href="">Reklamacije</a></li>
							<li><a href="">Predugovorne obavijesti</a></li>
							<li><a href="">Predugovorne obavijesti</a></li>
							<li><a href="javascript:void(0);" class="gdpr_configurator_button" id="gdpr_configurator_button">Uredi privole</a></li>
						</ul>
					</div>
				</div>
				<div class="footer-info">
					<div class="contact-info">
						<h4>Pomoć i informacije</h4>
						<p><a href="mailto:webshop@suplementi.hr">webshop@suplementi.hr</a></p>
					</div>
					<div class="cards">
						<p>
							<a href="https://www.wspay.info/" target="_blank"><img src="~assets/images/ws.jpg" width="84" height="36" alt="" loading="lazy"></a>
							<a href="https://www.mastercard.hr/hr-hr/consumers/find-card-products/debit-cards/maestro-debit.html" target="_blank"><img src="~assets/images/mastercard.png" width="31" height="21" alt="" loading="lazy"></a>
							<a href="https://www.mastercard.hr/hr-hr/privatni/pronadite-karticu.html" target="_blank"><img src="~assets/images/maestrocard.png" width="31" height="21" alt="" loading="lazy"></a>
							<a href="https://www.diners.hr/hr" target="_blank"><img src="~assets/images/diners.png" width="31" height="21" alt="" loading="lazy"></a>
							<a href="https://www.visa.com.hr/" target="_blank"><img src="~assets/images/visa.png" width="30" height="21" alt="" loading="lazy"></a>				
						</p>
					</div>
				</div>
				<div class="footer-slogan">	
					<img src="~assets/images/footer-slogan.svg" width="570" height="23" alt="" loading="lazy">
				</div>
				<div class="footer-bottom">
					<div class="copy-cnt">
						<a href="#" class="footer-logo"><img src="~assets/images/logo-footer.svg" width="110" height="20" alt="" loading="lazy"></a>
						<div class="copy">© 2021. Suplementi.hr</div>
						<div class="dev"><a href="#">Izrada web shopa: Marker.hr</a></div>
					</div>		
					<div class="footer-social">
						<div class="social">				
							<a class="social-item social-item-fb" href="#" target="_blank">Facebook</a>
							<a class="social-item social-item-in" href="#" target="_blank">Instagram</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	computed: {
		footerCol1Menu() {
			return this.$store.getters['cms/getMenu']('sidebar-menu')
		}
	}
}
</script>

<style lang="less" scoped>

</style>