const path = require('path');
const HttmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: ['babel-polyfill','./src/js/index.js'],
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer:{
        contentBase: './dist'
    },
    plugins: [
        new HttmlWebpackPlugin({
            filename: 'index.html',
            template:'./index.html'
        })
    ],
    module: {
        rules:[
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }
        ]
    }
 };