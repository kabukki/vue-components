const path = require('path');

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
	}
};
