/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'blue-accent': '#AFDED9',
				'blue-hover': '#486b67',
			},
		},
	},
	plugins: [],
}

