<template>
	<div class="orders-cnt-bg">	
		<div class="wrapper">
			
			<div class="auth-box orders-container" id="orders">
				<h2 class="auth-title auth-title-orders"><a href="/">{{ cmslabel('latest_orders', 'title') }}</a></h2>
				
				<div class="auth-table orders">
					<div class="auth-table-header">
						<div class="table-order">
							<div class="table-col col-order-num">Broj narudžbe</div>
							<div class="table-col col-order-date">Datum</div>
							<div class="table-col col-order-status">Status</div>
							<div class="table-col col-order-qty">Količina</div>
							<div class="table-col col-order-total">Cijena</div>
							<div class="table-col col-order-btns"></div>
						</div>
					</div>
					<div class="order-row clear" id="order-458">
						<!-- Order Item -->
						<div class="table-order">
							<div class="table-col col-order-num"><span class="col-title-m">Broj narudžbe: </span>458</div>
							<div class="table-col col-order-date"><span class="col-title-m">Datum: </span>12.02.2021</div>
							<div class="table-col col-order-status"><span class="col-title-m">Status: </span>Otkazano</div>
							<div class="table-col col-order-qty"><span class="col-title-m">Količina: </span>1 kom</div>
							<div class="table-col col-order-total"><span class="col-title-m">Cijena: </span>290,00 kn</div>
							
							<div class="table-col col-order-btns">
								<a class="btn-order-details" id="btn-order-458" href="javascript:toggleBox(['div#order-458', 'a#btn-order-458']);">
									<span class="btn-inactive">Prikaži detalje</span>
									<span class="btn-active">Sakrij detalje</span>
								</a>
							</div>
						</div>

						<!-- Order Item Details (subitems) -->
						<div class="order-details clear">
							<div class="w-table w-table-details">
								<div class="wp wp-details">
										<div class="wp-image">
											<figure>
												<img src="https://b2b.cotra.hr/upload/catalog/product/3046/thumb/35915_60264c4045180_80x80r.png" width="80" height="80" alt="SVJETILJKA LED ZIDNA ANTRACIT 10W IP65 JR601A DG" data-product_main_image="3046_0">
											</figure>
										</div>
										<div class="wp-cnt">
											<h2 class="wp-title" data-product_title="3046_0">SVJETILJKA LED ZIDNA ANTRACIT 10W IP65 JR601A DG</h2>
											<div class="wp-code"><span>Šifra:</span> <span data-product_code="3046_0">35915</span></div>
											<div class="wp-qty-count">
												<span class="product_qty">1  kom</span> x 232,00 kn
											</div>
											<!-- Repeat Product Order -->
											<a class="btn btn-cart btn-order-again" href="javascript:cmswebshop.shopping_cart.add('3046_0', '', 'simple', 'simple', 3)"><span>Dodaj u košaricu</span></a>
										</div>
									</div>
								</div>
							
								<div class="wp-details-total">
									<div>
										<span class="w-totals-label">Osnovica za obračun PDV-a:</span>
										<span class="w-totals-value total_extra_payment">232,00 kn</span>
									</div>
									<div>
										<span class="w-totals-label">Ukupan PDV:</span>
										<span class="w-totals-value total_extra_payment">58,00 kn</span>
									</div>
									<div>
										<span class="w-totals-label">Ukupno bez dostave:</span>
										<span class="w-totals-value total_extra_payment">290,00 kn</span>
									</div>
									<div>
										<span class="w-totals-label">Dostava:</span>
										<span class="w-totals-value total_extra_payment">0,00 kn</span>
									</div>
									<div class="ww-total cart-total">
										<span class="w-totals-label">Ukupno za plaćanje:</span>
										<span class="w-totals-value value cart_info_total">290,00 kn</span>
									</div>
								</div>
								<a class="btn btn-purple btn-repeat-order" href="https://b2b.cotra.hr/proizvodi/?special_view=order_form&amp;order_id=1410">Uredi i ponovi narudžbu</a>
							</div>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
		
		</div>
	</div>
</template>

<style lang="less">

</style>