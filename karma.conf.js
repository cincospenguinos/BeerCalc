const path = require('path');

module.exports = (config) => {
	config.set({
		browsers: ['Chrome'],
		frameworks: ['jasmine'],
		basepath: 'webpack',
		autoWatch: false,
		files: ['webpack/**/*-spec.jsx', 'webpack/**/*-spec.js'],
		preprocessors: {
			'webpack/**/*-spec.jsx': ['webpack'],
			'webpack/**/*-spec.js': ['webpack'],
		},

		webpack: {
			mode: 'development',
		},

		webpackMiddleware: {
			// webpack-dev-middleware configuration
			// i.e.
			noInfo: true,
			// and use stats to turn off verbose output
			stats: {
				// options i.e. 
				chunks: false
			}
		},

		client: {
			captureConsole: true,
		},
		reporters: ['dots'],
	    singleRun: true, // exit after tests have completed

	    webpackMiddleware: {
	      noInfo: true
	    },

	    browserNoActivityTimeout: 60000, // 60 seconds
	});
}