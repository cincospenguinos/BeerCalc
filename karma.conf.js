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
			module: {
				rules: [
					{
						test: /\.(js|jsx)$/,
						exclude: /(node_modules)/,
						loader: "babel-loader", // "babel-loader" is also a legal name to reference
						query: {
							presets: ['@babel/react', '@babel/preset-env'],
							plugins: ['@babel/plugin-proposal-class-properties']
						}
					}
				]
			},
      resolve: {
        extensions: ['.js', '.jsx']
      },
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
};