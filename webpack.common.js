const path = require("path");
const loaders = require("./loaders");
const webpack = require("webpack"); // to access built-in plugins
const plugins = require("./plugins");

let mode = "development";
if (process.env.NODE_ENV === "production") {
	mode = "production";
	// Temporary workaround for 'browserslist' bug that is being patched in the near future
	// target = "browserslist";
}

const _plugins = [
	new webpack.ProgressPlugin(),
	plugins.CleanWebpackPlugin,
	// plugins.htmlWebpackPlugin({ env: mode }),
	plugins.ESLintPlugin,
	plugins.StyleLintPlugin,
	plugins.miniCssExtractPlugin({ env: mode })
];

// // Confirmed @linaria/shake@3.0.0-beta.4 is last working version. beta.5 breaks.
// if (process.env.SERVE) {
// 	// We only want React Hot Reloading in serve mode
// 	_plugins.push(plugins.ReactRefreshWebpackPlugin);
// }

// multi page array names without extensions and js file same as html files
const pages = ["index"];
const commonChunks = [];
let scripts = pages.reduce((config, page) => {
	config[page] = path.join(__dirname, "./src", "js", `${page}.js`);
	return config;
}, {});
let commonScripts = commonChunks.reduce((config, chunk) => {
	config[chunk] = path.join(__dirname, "./src", "js", `${chunk}.js`);
	return config;
}, {});
module.exports = {
	mode: mode,
	// entry: ["/src/js/script.js", "/src/js/vendor.js"],
	// entry: {
	//   vendor: path.join(__dirname, "../src", "js", "vendor"),
	//   index: path.join(__dirname, "../src", "js", "index"),
	// },
	entry: { ...commonScripts, ...scripts },
	output: {
		path: path.resolve(__dirname, "./dist"),
		publicPath: "/",
		filename: "js/[name].[contenthash:6].bundle.js",
		assetModuleFilename: "assets/[hash][ext]",
		clean: true
	},
	cache: {
		type: "filesystem" // memory: use content cache filesystem: use file cache
	},
	devtool: false,
	// optimization: {
	// 	splitChunks: {
	// 		chunks: "all"
	// 	}
	// },
	module: {
		rules: [
			loaders.HTMLLoader,
			loaders.jSLoader({ env: mode }),
			loaders.cssLoader({ env: mode }),
			loaders.Imageloader
		]
	},
	plugins: _plugins.concat(
		plugins.htmlWebpackPluginpages({
			env: mode,
			pages: pages,
			commonChunks: commonChunks
		})
	),
	// target: target,
	resolve: {
		extensions: [".js", ".jsx"]
	}
};
