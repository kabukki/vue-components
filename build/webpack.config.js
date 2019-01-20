const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: 'production',
	context: path.resolve(__dirname, '..'),
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'shops-vue-components.js',
		libraryTarget: 'umd',
		// Needed for UMD target to work, due to a bug introduced in Webpack 4
		// https://github.com/webpack/webpack/issues/6525#issuecomment-417580843
		globalObject: `typeof self !== 'undefined' ? self : this`
	},
	externals: [
		// FontAwesomeIcon component
		'@fortawesome/vue-fontawesome',
		// Icon packs
		'@fortawesome/free-solid-svg-icons',
		'@fortawesome/free-regular-svg-icons'
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src')
		},
		extensions: ['.js', '.vue', '.scss']
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.scss$/,
			use: [{
				loader: MiniCssExtractPlugin.loader
			}, {
				loader: 'css-loader'
			}, {
				loader: 'sass-loader'
			}]
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'shops-vue-components.css'
		})
	],
	optimization: {
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCssAssetsPlugin()
		]
	}
};
