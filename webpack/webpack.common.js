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
	plugins.miniCssExtractPlugin({ env: mode }),
];

if (process.env.SERVE) {
	// We only want React Hot Reloading in serve mode
	_plugins.push(plugins.ReactRefreshWebpackPlugin);
}

// multi page array names without extensions and js file same as html files
const pages = ["index"];
const commonChunks = [];
let scripts = pages.reduce((config, page) => {
	config[page] = path.join(__dirname, "../src", "js", `${page}.js`);
	return config;
}, {});
let commonScripts = commonChunks.reduce((config, chunk) => {
	config[chunk] = path.join(__dirname, "../src", "js", `${chunk}.js`);
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
	optimization: {
		splitChunks: {
			chunks: "all",
		},
	},
	module: {
		rules: [
			loaders.HTMLLoader,
			loaders.JSLoader,
			loaders.cssLoader,
			loaders.Imageloader,
		],
	},
	plugins: _plugins.concat(
		plugins.htmlWebpackPluginpages({
			env: mode,
			pages: pages,
			commonChunks: commonChunks,
		})
	),
	devtool: mode === "production" ? "source-map" : "eval-source-map",
	// target: target,
	resolve: {
		extensions: [".scss", ".json", ".js", ".jsx"],
	},
};
