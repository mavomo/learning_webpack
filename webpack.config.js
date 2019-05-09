const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Caching"
        })
    ],
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: "[name].bundle.js"
    },
    optimization: {
        runtimeChunk: 'single',
        minimize:false,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name:'vendors',
                    chunks: "all"
                }
            }

        }
    }
};