const path = require('path')
module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'index.js',
		path: `${__dirname}/../dist/`,
		libraryTarget: 'umd',
	},
	performance: {
		hints: 'warning', // 枚举

		maxAssetSize: 300000000000, // 整数类型（以字节为单位）

		maxEntrypointSize: 50000000000, // 整数类型（以字节为单位）

		assetFilter: function (assetFilename) {
			// 提供资源文件名的断言函数

			return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
		},
	},
}
