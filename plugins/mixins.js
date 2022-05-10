import Vue from 'vue'
import { cmslabel } from '@marker/mixins/cmslabel'

if (!Vue.__globalmixins__) {
	Vue.__globalmixins__ = true;
	Vue.mixin({
		methods: {
			cmslabel: function(code, field) {
				const store = this.$store;
				return cmslabel({store, code, field})
			}
		}
	})
}