const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: 'production',
	context: path.resolve(__dirname, '..'),
	entry: {
		main: path.resolve(__dirname, '../src/index.js')
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		// filename: 'vue-components.js',
		libraryTarget: 'umd',
		// Needed for UMD target to work, due to a bug introduced in Webpack 4
		// https://github.com/webpack/webpack/issues/6525#issuecomment-417580843
		globalObject: `typeof self !== 'undefined' ? self : this`
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src')
		},
		extensions: ['.js', '.vue']
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
	},
	plugins: [
		new VueLoaderPlugin()
	],
	optimization: {
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			})
		]
	}
};
