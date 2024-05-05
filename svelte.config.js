import adapter from '@sveltejs/adapter-static';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'fallback.html'
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/JoshuaKimble.github.io' : ''
		}
	}
};
