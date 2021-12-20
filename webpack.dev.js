const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	infrastructureLogging: {
		colors: true,
		appendOnly: true,
		level: "info"
	},
	// optimization: {
	// 	runtimeChunk: "single"
	// },
	devServer: {
		// static: {
		// 	directory: path.join(__dirname, "public"),
		// 	publicPath: "/"
		// },
		// // watchFiles: path.join(__dirname, '../src/index.html'),
		open: true,
		// hot: true,
		// liveReload: true,
		compress: true,
		port: "auto",
		allowedHosts: "all",
		historyApiFallback: true,
		// host: "0.0.0.0",
		devMiddleware: {
			stats: "minimal"
		},
		client: {
			logging: "info",
			overlay: true,
			progress: true
		}
	}
});
