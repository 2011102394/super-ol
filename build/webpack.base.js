const path = require('path')
module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	output: {
		filename: 'super-ol.js',
		path: `${__dirname}/../dist/`,
		libraryTarget: 'umd',
	},
	module: {
		rules: [{ test: /\.ts$/, exclude: /node_modules/, use: ['ts-loader'] }],
	},
	resolve: {
		extensions: ['.js', '.ts'],
	},
}
