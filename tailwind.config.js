module.exports = {
	purge: {
		content: ["./index.html", "./src/**/*.tsx", "./src/**/*.ts"],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				'jaapokki': ['Jaapokki']
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
