const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	output: {
		// assetModuleFilename: "imgs/[hash][ext][query]",
		filename: "js/[name].bundle.js",
		path: path.resolve(__dirname, "../dist"),
	},
	optimization: {
		runtimeChunk: "single",
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
			publicPath: "/",
		},
		// watchFiles: path.join(__dirname, '../src/index.html'),
		open: true,
		hot: true,
		liveReload: true,
		compress: true,
		port: "auto",
	},
});
