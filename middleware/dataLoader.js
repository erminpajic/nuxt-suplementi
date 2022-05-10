import { middleware } from '@marker/router';

export default async ({app, store, params, $config}) => {
	await middleware({app, store, params, $config});
}