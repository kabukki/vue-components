const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const themes = require('../themes').webpackEntries;

// Paths to theme CSS entries
// const themes = {
// 	'themes/shops': path.resolve(__dirname, '../src/scss/themes/shops/main.scss'),
// 	'themes/alidhan': path.resolve(__dirname, '../src/scss/themes/alidhan/main.scss'),
// 	'themes/grammarly': path.resolve(__dirname, '../src/scss/themes/grammarly/main.scss')
// };

module.exports = {
	mode: 'production',
	context: path.resolve(__dirname, '..'),
	entry: {
		main: path.resolve(__dirname, '../src/index.js'),
		...themes
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		// filename: 'vue-components.js',
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
	// optimization: {
	// 	splitChunks: {
	// 		cacheGroups: {
	// 			shops: {
	// 				test: themes.shops,
	// 				name: 'shops',
	// 				filename: 'shops.css',
	// 				chunks: 'all'
	// 			}
	// 		}
	// 	}
	// },
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}, {
			test: /\.scss$/,
			use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
		}, {
			test: /\.woff2$/,
			use: 'url-loader'
		}]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css'
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
