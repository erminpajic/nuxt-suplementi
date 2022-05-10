import Vue from 'vue'
import { linkInterpolation } from '@marker/directives/linkinterpolation'

export default ({ app: { router, $config: { siteUrl } } }) => {
	linkInterpolation({Vue, router, siteUrl});
}