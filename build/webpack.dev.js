const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')
//引入webpack插件
const webpack = require("webpack")


const devConfig = {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
}

module.exports = merge(baseConfig, devConfig)