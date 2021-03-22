const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: __dirname  + '/src/index.js', //Archivo inicial
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, //Transform all .js and .jsx files
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: { presets: ["@babel/env"]}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/dist/',
		filename: '[name].bundle.js'
	},
	resolve: {extensions: ['*', '.js', '.jsx']}, //Generar paths para archivos with the same name
	devServer: {
		contentBase: path.join(__dirname, 'public/'),
		port: 8080,
		publicPath: 'http://localhost:8080/dist/',
		hotOnly: true,
		historyApiFallback: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),//Enable hotloading
		new HtmlWebpackPlugin()
	]
};