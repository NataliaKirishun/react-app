const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

     module.exports = merge(common, {
       mode: 'development',
       devtool: 'inline-source-map',
       devServer: {
         contentBase: path.resolve(__dirname, 'dist'),
         hot: true,
         historyApiFallback: true,
       },
         output: {
             filename: '[name].bundle.[hash].js'
         }
 });