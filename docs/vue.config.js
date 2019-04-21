const path = require('path');

// https://cli.vuejs.org/config/#vue-config-js

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/components/' : '/'
};
