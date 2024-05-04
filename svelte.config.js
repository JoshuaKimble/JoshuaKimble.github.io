import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'fallback.html'
		}),
		paths: {
			base: '/JoshuaKimble.github.io'
		}
	}
};