/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,css,scss}', './*.html'],
	theme: {
		extend: {
			colors: {
				red: '#F84626',
			},
		},
	},
	plugins: [],
};
