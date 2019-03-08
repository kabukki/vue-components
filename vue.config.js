const path = require('path');

// https://cli.vuejs.org/config/#vue-config-js

module.exports = {
	configureWebpack: {
		entry: {
			app: './docs/main.js'
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './docs')
			}
		}
	},
	outputDir: path.resolve(__dirname, './dist/docs')
};
