const path = require('path');

module.exports = {
	configureWebpack: {
		entry: {
			app: './demo/main.js'
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './demo'),
				'vars': path.resolve(__dirname, './src/scss/_variables.scss')
			}
		}
	}
};
