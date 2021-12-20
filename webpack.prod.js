const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const plugins = require("./plugins");

module.exports = merge(common, {
	mode: "production",
	optimization: {
		usedExports: true,
		minimize: true,
		minimizer: [plugins.CssMinimizerPlugin, plugins.TerserPlugin],
		splitChunks: {
			chunks: "all",
			minSize: 30000,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: "~",
			cacheGroups: {
				"vendors": {
					chunks: "all",
					test: /(react|react-dom|react-dom-router|babel-polyfill|antd|mobx)/,
					priority: 100,
					name: "vendors"
				},
				"async-commons": {
					chunks: "async",
					minChunks: 2,
					name: "async-commons",
					priority: 90
				},
				"commons": {
					chunks: "all",
					minChunks: 2,
					name: "commons",
					priority: 80
				}
			}
		}
	},
	plugins: [plugins.CssMinimizerPlugin, plugins.TerserPlugin, plugins.CompressionWebpackPlugin]
});
