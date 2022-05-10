<template>
	<div class="wrapper nw-wrapper">
		<div class="nw-body">
			<div class="nw-headline">Postanimo prijatelji</div>
			<div class="nw-title">Prijavi se na newsletter</div>
			<div class="nw-subtitle">i ostvari <strong>10% popusta</strong> na prvu kupovinu</div>
		</div>
		<div class="nw-cnt">
			<form action="" class="nw-form">
				<div class="nw-fields">
					<input class="nw-input" type="email" name="email" placeholder="Tvoj email..." />
					<button class="nw-button" type="submit"><span>Pošalji</span></button>
				</div>
				<div id="field-error-email" class="nw-error" style="display: none;">Greška: obvezno ispuniti polje za email</div>

				<div class="nw-checkbox">
					<input type="hidden" name="gdpr_accept" value="0">
					<input type="checkbox" name="gdpr_accept" value="1" id="gdpr_accept-1">
					<label for="gdpr_accept-1"><span> Suglasan sam da NAZIV TVRTKE smije spremiti moju e-mail adresu u svrhu slanja newslettera promotivnog i edukativnog sadržaja.  Lorem ipsum će ti kao i do sada slati obavijesti o posebnim pogodnostima, kupone za popust i članke vezane lorem ipsum dolores sit amet. Tvoja e-mail adresa spremljena je u NAZIV TVRTKE CMS web programu, na serveru tvrtke Cratis d.o.o. a biti će također proslijeđena Mailchimp.com servisu koji koristimo za slanje newslettera. Tvoju e-mail adresu čuvati ćemo do trenutka kada ćeš se ispisati iz newslettera.  U svakom trenutku možeš povući privolu. Takvo povlačenje neće utjecati na zakonitost obrade na temelju privole prije njezina povlačenja. U svakom trenutku se možeš odjaviti sa primanja našeg newslettera klikom na ikonu Odjava koju ćeš imati u svakom pojedinačnom izdanju newslettera. Povlačenjem privole nećeš više dobivati naše newslettere ali ćeš i dalje moći koristiti našu web stranicu i druge naše usluge. Kontakt za povlačenje privole i prestanak članstva: MAIL ADRESA ili na adresa NAZIV ADRESE.</span></label>
					<span id="field-error-newsletter_gdpr_accept" class="error nw-gdpr-error gdpr_accept-error" style="display: none"></span>
				</div>

			</form>
			<div class="nw-success newsletter_subscribe_success" style="display:none;">Uspješno ste se prijavili na mailing listu. Na upisanu e-mail adresu je poslan link za potvrdu prijave.</div>
		</div>
	</div>
</template>

<style lang="less">
	
</style>

<script>
	export default {
		name: "Manage",
	}
</script>