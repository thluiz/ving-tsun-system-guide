// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://vingtsun.thluiz.com',
	integrations: [
		starlight({
			title: 'Ving Tsun: A System Guide',
			customCss: [
				'@fontsource/dm-sans/400.css',
				'@fontsource/dm-sans/600.css',
				'@fontsource/dm-sans/700.css',
				'@fontsource/crimson-pro/400.css',
				'@fontsource/crimson-pro/400-italic.css',
				'@fontsource/crimson-pro/600.css',
				'./src/styles/custom.css',
			],
			defaultLocale: 'pt-br',
			locales: {
				'pt-br': {
					label: 'Português',
					lang: 'pt-BR',
				},
				en: {
					label: 'English',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/thluiz/ving-tsun-system-guide' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/thluiz' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/thluiz' },
				{ icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/thluiz' },
				{ icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/@thluiz' },
			],
			sidebar: [
				{
					label: 'Capítulos',
					translations: { en: 'Chapters' },
					autogenerate: { directory: 'capitulos' },
				},
			],
		}),
	],
});
