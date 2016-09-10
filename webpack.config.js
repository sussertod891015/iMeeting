/*
 * @Author: sussertod
 * @Date:   2016-08-17 09:18:21
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-10 15:39:30
 */

'use strict';

var webpack = require('webpack');
var path = require('path');

//路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    entry: {
        app: path.resolve(SRC_PATH, 'app.js'),
        vendor: ['react', 'react-dom']
    },
    output: {
        path: DIST_PATH + '/assets', // 输出文件的保存路径
        publicPath: 'http://localhost:8080/dist/assets/',
        filename: 'app.bundle.js' // 输出文件的名称
    },
    //enable dev source map
    devtool: 'eval-source-map',
    //enable dev server
    devServer: {
        historyApiFallback: true,
        host: '192.168.1.106',
        inline: true,
        progress: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            include: SRC_PATH
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.scss$/,
            loaders: ["style?module", "css?module", "sass?module"]
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=999999999'
        }]
    },
    jshint: {
        "esnext": true
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            /* chunkName= */
            "vendor",
            /* filename= */
            "vendor.bundle.js",
            2
        )
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css']
    }
}
