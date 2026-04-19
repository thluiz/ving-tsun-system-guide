// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://vingtsun.thluiz.com',
	integrations: [
		starlight({
			title: 'Ving Tsun: A System Guide',
			head: [
				{
					tag: 'script',
					content: `
						document.addEventListener('keydown', (e) => {
							const tag = document.activeElement?.tagName;
							if (['INPUT','TEXTAREA','SELECT'].includes(tag)) return;
							if (e.key === '/') {
								e.preventDefault();
								document.querySelector('[data-open-modal]')?.click();
							}
						});

						(function() {
							const SIZES = [1.125, 1.25, 1.375, 1.5, 1.625];
							const DEFAULT = 2;
							let current = parseInt(localStorage.getItem('vt-font-size') || DEFAULT);
							if (current < 0 || current >= SIZES.length) current = DEFAULT;

							function apply(idx) {
								current = idx;
								document.documentElement.style.setProperty('--vt-body-size', SIZES[idx] + 'rem');
								localStorage.setItem('vt-font-size', idx);
								const btn = document.getElementById('vt-font-label');
								if (btn) btn.textContent = 'A' + (idx + 1);
							}

							apply(current);

							document.addEventListener('DOMContentLoaded', () => {
								const wrap = document.createElement('div');
								wrap.className = 'vt-font-ctrl';
								wrap.innerHTML = '<button id="vt-font-down" title="Diminuir fonte" aria-label="Diminuir fonte">A−</button>'
									+ '<button id="vt-font-up" title="Aumentar fonte" aria-label="Aumentar fonte">A+</button>';
								document.body.appendChild(wrap);

								document.getElementById('vt-font-down').addEventListener('click', () => {
									if (current > 0) apply(current - 1);
								});
								document.getElementById('vt-font-up').addEventListener('click', () => {
									if (current < SIZES.length - 1) apply(current + 1);
								});
							});
						})();
					`,
				},
			],
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
