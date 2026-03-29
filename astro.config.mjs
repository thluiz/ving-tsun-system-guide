// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ving Tsun: A System Guide',
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
