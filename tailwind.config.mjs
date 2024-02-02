/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			fontFamily: {
				'primary': ['Playpen Sans', 'cursive']
			},
			backgroundImage: {
				'test': "url('/src/img/grid/picture-1.jpg')",
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
