/** @type { import('./webpack.common').INewConfiguration } */
const __WEBPACK_CONFIG__ = {
	optimization: {
		chunkIds: 'total-size',
		minimize: false, //* Covered by '@snowpack/plugin-optimize'
	},
}

export default __WEBPACK_CONFIG__;
