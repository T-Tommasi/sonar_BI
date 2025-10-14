/** @type {import('tailwindcss').Config} */
module.exports = {
	// Tell Tailwind where to look for classes
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'background-color': '#2b3d4f',
				'accent-color': '#354a5f',
				'text-color': '#000000',
				'link-color': '#3398db',
				'warning-color': '#e74c3c'
			}
		}
	},

	plugins: []
};
