const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebServerPlugin = require('webpack-dev-server');

module.exports = {
    mode:'development',
    entry: {
        app: './src/index.js',
        print: './src/printer/print.js'
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Output management"
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
};