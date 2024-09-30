/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	prefix: "",
	theme: {
		extend: {
			colors: {
				primary: "var(--main-color)",
				secondary: "var(--second-main-color)",
				third: "var(--third-main-color)",
				pcolor: "var(--text-color)",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				shadprimary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				shadsecondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
			  lg: "var(--radius)",
			  md: "calc(var(--radius) - 2px)",
			  sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
			  "accordion-down": {
				from: { height: "0" },
				to: { height: "var(--radix-accordion-content-height)" },
			  },
			  "accordion-up": {
				from: { height: "var(--radix-accordion-content-height)" },
				to: { height: "0" },
			  },
			},
			animation: {
			  "accordion-down": "accordion-down 0.2s ease-out",
			  "accordion-up": "accordion-up 0.2s ease-out",
			},
			fontFamily: {
					  times: ["Times New Roman", "Times", "serif"],
					  overpass: ["Overpass", "sans-serif"],
					  perpetua: ["Perpetua Titling MT", "sans-serif"]
			},
			gridAutoRows: {
				'20': 'repeat(20, minmax(0, 1fr))'
			},
			sceens: {
				'custom': '991px'
			}
		  },
	},
}
