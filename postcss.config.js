const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const Import = require('postcss-import')

module.exports = {
	plugins: [
		cssnano(),
		postcssPresetEnv(),
		Import(),
	],
};