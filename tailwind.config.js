module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#faf9f9',
				secondary: '#bee3db',
				third: '#ade8f4',
				dark: '#023047',
				accent: '#8ecae6',
				darkAccent: '#219ebc',
			},
			borderStyle: ['responsive', 'hover', 'focus'],
			borderWidth: ['responsive', 'hover', 'focus'],
		},
	},
	plugins: [],
};
