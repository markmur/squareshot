'use strict';

const path = require('path');

var webpack = require('webpack');
var config = require('./webpack.config.base.js');

if (process.env.NODE_ENV !== 'test') {
  config.entry = [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
  ].concat(config.entry);
}

config.devtool = 'cheap-module-eval-source-map';

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
]);

config.module.loaders = config.module.loaders.concat([
  {
    test: /\.jsx?$/, // react files
    exclude: /node_modules/,
    loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react'],
    include: path.join(__dirname, 'assets'),
  },
]);

module.exports = config;
