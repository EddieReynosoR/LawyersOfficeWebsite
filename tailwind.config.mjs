/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
				times: ["Times New Roman", "Times", "serif"],
				overpass: ["Overpass", "sans-serif"],
				perpetua: ["Perpetua Titling MT", "sans-serif"]
			},
			colors: {
				primary: "var(--main-color)",
				secondary: "var(--second-main-color)"
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
