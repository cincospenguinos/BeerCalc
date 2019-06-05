const path = require('path');

module.exports = (config) => {
	config.set({
		browsers: ['Chrome'],
		frameworks: ['jasmine'],
		basepath: 'webpack',
		autoWatch: false,
		files: ['webpack/**/*-spec.jsx', 'webpack/**/*-spec.js'],
		preprocessors: {
			'webpack.tests.js': ['webpack'],
		},

		webpack: {
			entry: 'webpack/tests.js',
			output: {
				path: path.resolve(__dirname),
				filename: 'bundle.js',
			},
			target: 'web',
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