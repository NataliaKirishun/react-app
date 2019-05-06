const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  entry: [
    isDevMod && 'webpack-hot-middleware/client',
    './src/client.js',
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        use: [
          isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
    ],
  },

  plugins: [
    !isDevMod && new CleanWebpackPlugin(),
    isDevMod && new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    // new OptimizeCssAssetsPlugin({})
  ].filter(Boolean),

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
          },
        },
      )]
  }

});