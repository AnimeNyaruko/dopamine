import { defineConfig } from 'vite';
import fg from 'fast-glob';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
	watchGlob: ['./src/**/*'],
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
				const files = await fg('src/**/*');
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
		viteStaticCopy({
			targets: [
				{
					src: await fg('src/**/*.woff'),
					dest: 'assets/fonts',
				},
			],
		}),
	],
});
