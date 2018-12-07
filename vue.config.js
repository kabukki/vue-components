module.exports = {
	configureWebpack: {
		output: {
			libraryTarget: 'umd'
		},
		externals: [
			// FontAwesomeIcon component
			'@fortawesome/vue-fontawesome',
			// Icon packs
			'@fortawesome/free-solid-svg-icons',
			'@fortawesome/free-regular-svg-icons'
		]
	}
};
