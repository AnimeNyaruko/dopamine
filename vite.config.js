import { defineConfig } from 'vite';
import fg from 'fast-glob';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	include: ['{public,src}/**/*'],
	watchGlob: ['./{public,src}/**/*'],
	build: {
		assets: {
			include: ['src/**/*.woff', 'src/**/*.woff2'],
		},
	},
	plugins: [
		react(),
		{
			name: 'watch-external',
			async buildStart() {
				const files = await fg('{public,src}/**/*');
				console.log(files);
				for (let file of files) {
					try {
						this.addWatchFile(file);
					} catch (err) {
						console.log(err);
					}
				}
			},
		},
	],
});
