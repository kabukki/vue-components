const path = require('path');

/**
 * List of available themes
 * . name: name of the theme
 * . description: short description of the theme
 * . class: css class to use to apply theme
 * . out: output directory (for webpack)
 * . entry: entry file for bundle (for webpack)
 */
exports.themes = [
	{
		name: 'Shops',
		description: 'Shops Epitech Innovative Project',
		class: 'shops',
		out: 'themes/shops',
		entry: path.resolve(__dirname, './src/scss/themes/shops/main.scss')
	}, {
		name: 'Alidhan',
		description: 'Alidhan game',
		class: 'alidhan',
		out: 'themes/alidhan',
		entry: path.resolve(__dirname, './src/scss/themes/alidhan/main.scss')
	}, {
		name: 'Grammarly',
		description: 'Partial copy of Grammarly style',
		class: 'grammarly',
		out: 'themes/grammarly',
		entry: path.resolve(__dirname, './src/scss/themes/grammarly/main.scss')
	}
];

/**
 * Paths to CSS entries to allow Webpack to build the themes
 */
exports.webpackEntries = exports.themes.reduce((obj, theme) => {
	obj[theme.out] = theme.entry;
	return obj;
}, {});

exports.default = exports.themes;
