const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JSLoader = ({ env = "production" }) => ({
	test: /\.(js|jsx)$/i,
	exclude: /(node_modules|bower_components)/,
	use: [{ loader: "babel-loader" }, { loader: "@linaria/webpack-loader" }]
});

const cssLoader = ({ env = "production" }) => ({
	oneOf: [
		// css support
		{
			test: /\.css$/i,
			exclude: /\.modules\.css$/i,
			use: [
				{ loader: MiniCssExtractPlugin.loader },
				{
					loader: "css-loader",
					options: { sourceMap: env === "production" ? false : true }
				},
				{ loader: "postcss-loader" }
			]
		},
		// less support, antd theme vars modify
		{
			test: /\.less$/i,
			exclude: /\.modules\.less$/i,
			use: [
				{ loader: MiniCssExtractPlugin.loader },
				{
					loader: "css-loader",
					options: { sourceMap: env === "production" ? false : true }
				},
				{ loader: "postcss-loader" },
				{
					loader: "less-loader",
					options: {
						lessOptions: {
							javascriptEnabled: true,
							modifyVars: {
								"primary-color": "#F37F89",
								"link-color": "#F37F89",
								"success-color": "#1C5530"
							}
						}
					}
				}
			]
		},
		// scss support, antd theme vars modify
		{
			test: /\.scss$/i,
			exclude: /\.modules\.scss$/i,
			use: [
				{ loader: MiniCssExtractPlugin.loader },
				{
					loader: "css-loader",
					options: { sourceMap: env === "production" ? false : true }
				},
				{ loader: "postcss-loader" },
				{
					loader: "sass-loader",
					options: {
						lessOptions: {
							javascriptEnabled: true,
							modifyVars: {
								"primary-color": "#F37F89",
								"link-color": "#F37F89",
								"success-color": "#1C5530"
							}
						}
					}
				}
			]
		},
		// css module support
		{
			test: /\.modules\.css$/i,
			use: [
				{ loader: MiniCssExtractPlugin.loader },
				{
					loader: "css-loader",
					options: {
						modules: true,
						importLoaders: 1
					}
				},
				{ loader: "postcss-loader" }
			]
		},
		// less module support
		{
			test: /\.modules.less$/i,
			use: [
				{ loader: MiniCssExtractPlugin.loader },
				{
					loader: "css-loader",
					options: {
						modules: true,
						importLoaders: 1
					}
				},
				{ loader: "postcss-loader" },
				{
					loader: "less-loader",
					options: {
						lessOptions: {
							javascriptEnabled: true
						}
					}
				}
			]
		},
		// scss module support
		{
			test: /\.modules.scss$/i,
			use: [
				{ loader: MiniCssExtractPlugin.loader },
				{
					loader: "css-loader",
					options: {
						modules: true,
						importLoaders: 1
					}
				},
				{ loader: "postcss-loader" },
				{
					loader: "sass-loader",
					options: {
						lessOptions: {
							javascriptEnabled: true
						}
					}
				}
			]
		}
	]
});

const HTMLLoader = {
	test: /\.html$/i,
	use: ["html-loader"]
};

const Imageloader = {
	test: /\.(bmp|gif|jpe?g|png|ico|eot|svg|ttf|woff|woff2?)$/i,
	/**
	 * The `type` setting replaces the need for "url-loader"
	 * and "file-loader" in Webpack 5.
	 *
	 * setting `type` to "asset" will automatically pick between
	 * outputing images to a file, or inlining them in the bundle as base64
	 * with a default max inline size of 8kb
	 */
	type: "asset",

	/**
	 * If you want to inline larger images, you can set
	 * a custom `maxSize` for inline like so:
	 */
	// parser: {
	//   dataUrlCondition: {
	//     maxSize: 30 * 1024,
	//   },
	// },

	/**
	 * customize output filename
	 * instead of : assetModuleFilename: 'images/[hash][ext][query]'
	 */

	generator: {
		filename: "imgs/[hash][ext][query]"
	}
};
module.exports = {
	cssLoader: cssLoader,
	jSLoader: JSLoader,
	HTMLLoader: HTMLLoader,
	Imageloader: Imageloader
};
