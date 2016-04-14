'use strict';

const path = require('path');
const webpack = require('webpack');
var config = require('./webpack.config.base.js');

var SaveAssetsJson = require('assets-webpack-plugin');

config.bail = true;
config.debug = false;
config.profile = false;
config.devtool = '#source-map';

config.output = {
  path: '.tmp/public/dist/',
  pathInfo: true,
  publicPath: '/dist/',
  filename: 'bundle.[hash].min.js',
};

config.resolveLoader = {
  root: path.join(__dirname, 'node_modules'),
};

config.plugins = config.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false,
    },
    compress: {
      warnings: false,
      screw_ie8: true,
    },
  }),
  new SaveAssetsJson({
    path: process.cwd(),
    filename: 'assets.json',
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
]);

config.module.loaders = config.module.loaders.concat([{
  test: /\.jsx?$/, // react files
  exclude: /node_modules/,
  loaders: ['babel?presets[]=es2015,presets[]=stage-0,presets[]=react'],
  include: path.join(__dirname, 'assets'),
}, ]);

module.exports = config;
