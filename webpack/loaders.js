const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JSLoader = {
	test: /\.(js|jsx)$/i,
	exclude: /(node_modules|bower_components)/,
	use: {
		loader: "babel-loader",
		options: {
			// configFile: path.resolve(__dirname, "babel.config.js"),
			presets: [
				[
					"@babel/preset-env",
					{
						targets: "> .2%, ie 11",
					},
				],
				["@babel/preset-react", { runtime: "automatic" }],
			],
		},
	},
};

const cssLoader = {
	// test: /\.(s[ac]|c)ss$/i,
	test: /\.(css|sass|scss)$/i,
	exclude: /node_modules/,
	type: "asset",
	use: [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				// publicPath: path.resolve(__dirname, "../dist"),
				publicPath: "../",
			},
		},
		{
			loader: "css-loader",
			options: { importLoaders: 1 },
		},
		{
			loader: "postcss-loader",
			options: {
				postcssOptions: {
					config: path.resolve(__dirname, "postcss.config.js"),
					// config:
					//   env === "production"
					//     ? path.resolve(__dirname, "postcss/postcss.config.prod.js")
					//     : path.resolve(__dirname, "postcss/postcss.config.dev.js"),
				},
			},
		},
		{
			loader: "sass-loader",
			options: {
				sourceMap: true,
			},
		},
	],
};

const HTMLLoader = {
	test: /\.html$/i,
	use: ["html-loader"],
};

const Imageloader = {
	test: /\.(png|jpe?g|gif|svg|ico|webp)$/i,
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
		filename: "imgs/[hash][ext][query]",
	},
};
module.exports = {
	cssLoader: cssLoader,
	JSLoader: JSLoader,
	HTMLLoader: HTMLLoader,
	Imageloader: Imageloader,
};
