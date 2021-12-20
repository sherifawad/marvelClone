const path = require("path");
// var fs = require("fs");
const _ESLintPlugin = require("eslint-webpack-plugin");
const _MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _StyleLintPlugin = require("stylelint-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const _HtmlWebpackPlugin = require("html-webpack-plugin");
const _TerserPlugin = require("terser-webpack-plugin");
const _CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const _ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const _CompressionWebpackPlugin = require("compression-webpack-plugin");

const htmlWebpackPlugin = ({ env }) => {
	const result = new _HtmlWebpackPlugin({
		template: path.resolve(__dirname, "./src", "index.html"),
		minify:
			env === "production" ? { removeAttributeQuotes: true, collapseWhitespace: true, removeComments: true } : {}
	});

	return result;
};

const CompressionWebpackPlugin = new _CompressionWebpackPlugin({
	algorithm: "gzip",
	test: new RegExp(`\\.(${["js", "css", "png", "md"].join("|")})$`),
	threshold: 1024,
	minRatio: 0.8
});

const TerserPlugin = new _TerserPlugin({
	extractComments: true,
	terserOptions: {
		sourceMap: true
	}
});

const htmlWebpackPluginpages = ({ env = "production", pages, commonChunks = [] }) => {
	const result = pages.map(
		page =>
			new _HtmlWebpackPlugin({
				// inject: true,
				inject: "body",
				template: path.resolve(__dirname, "./src", `${page}.html`),
				filename: `${page}.html`,
				chunks: [`${page}`, ...commonChunks],
				minify:
					env === "production"
						? { removeAttributeQuotes: true, collapseWhitespace: true, removeComments: true }
						: {}
			})
	);

	// var result = pages.reduce((a, page) => {
	//   let fPath = path.resolve(__dirname, "../src", `${page}.html`);
	//       try {
	//     fs.accessSync(fPath, fs.constants.R_OK);
	//     a.push(new _HtmlWebpackPlugin({
	//       inject: true,
	//       template: fPath,
	//       filename: `${page}.html`,
	//       chunks: [page],
	//       minify:
	//         env === "production"
	//           ? {
	//               removeAttributeQuotes: true,
	//               collapseWhitespace: true,
	//               removeComments: true,
	//             }
	//           : {},
	//     }))
	//   }
	//   catch (err) {
	//     console.log("empty");
	//   }
	//     return a;
	// }, []);

	return result;
};

const ReactRefreshWebpackPlugin = new _ReactRefreshWebpackPlugin({
	exclude: /node_modules/,
	include: path.resolve(__dirname, "src"),
	overlay: false
});

const ESLintPlugin = new _ESLintPlugin({
	overrideConfigFile: path.resolve(__dirname, ".eslintrc.js"),
	context: path.resolve(__dirname, "./src/js"),
	files: "**/*.js"
});

const StyleLintPlugin = new _StyleLintPlugin({
	configFile: path.resolve(__dirname, "stylelint.config.js"),
	context: path.resolve(__dirname, "./src/scss"),
	files: "**/*.scss"
});

const MiniCssExtractPlugin = ({ env }) =>
	new _MiniCssExtractPlugin({
		filename: env === "production" ? "css/[name].[contenthash].bundle.css" : "css/[name].bundle.css",
		chunkFilename: "[id].css",
		ignoreOrder: true
	});

module.exports = {
	CleanWebpackPlugin: new CleanWebpackPlugin(),
	miniCssExtractPlugin: MiniCssExtractPlugin,
	StyleLintPlugin: StyleLintPlugin,
	ESLintPlugin: ESLintPlugin,
	CompressionWebpackPlugin: CompressionWebpackPlugin,
	htmlWebpackPlugin: htmlWebpackPlugin,
	htmlWebpackPluginpages: htmlWebpackPluginpages,
	ReactRefreshWebpackPlugin: ReactRefreshWebpackPlugin,
	CssMinimizerPlugin: new _CssMinimizerPlugin(),
	TerserPlugin: TerserPlugin
};
