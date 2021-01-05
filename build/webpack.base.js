const path = require('path')
module.exports = {
  mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'super-ol.js',
		path: `${__dirname}/../dist/`,
		libraryTarget:'umd'
	},
}
