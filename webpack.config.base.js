const path = require('path');
const webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV;

var env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined',
};

Object.assign(env, {
  build: (env.production || env.staging),
});

module.exports = {
  target: 'web',

  entry: [
    'babel-polyfill',
    './assets/main.jsx',
  ],

  output: {
    path: path.join(__dirname, '.tmp/public'),
    filename: 'bundle.js',
    pathInfo: true,
    publicPath: 'http://localhost:8080/',
    hot: true,
  },

  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'web_modules',
      'node_modules',
      'assets',
      'assets/components',
    ],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\'',
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.scss$/, // sass files
        loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded',
      },
      {
        test: /\.(ttf|eot|svg|woff)(\?[a-z0-9]+)?$/, // fonts files
        loader: 'file-loader?limit=100000',
      },
    ],

    noParse: /\.min\.js/,
  },
};
