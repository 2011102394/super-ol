const path = require('path')
module.exports = {
  mode: 'development',
	entry: `${__dirname}/../src/index.js`,
	output: {
		filename: 'super-ol.js',
		path: `${__dirname}/../dist/`,
	},
}
