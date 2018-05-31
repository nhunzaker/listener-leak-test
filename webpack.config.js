const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MinifyPlugin = require('babel-minify-webpack-plugin')

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const isDev = mode === 'development'

let config = {
	mode,
	devtool: isDev ? 'cheap-module-source-map' : false,
	entry: [path.resolve(__dirname, 'src/index.js')],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, 'src'),
				loader: require.resolve('babel-loader')
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'static/index.html'
		})
	],
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: ['node_modules', 'src']
	},
	optimization: {
		minimize: !isDev,
		minimizer: [
			new MinifyPlugin(
				{
					removeDebugger: true,
					removeConsole: true,
					mangle: false
				},
				{
					sourceMap: false
				}
			)
		]
	}
}

module.exports = config
