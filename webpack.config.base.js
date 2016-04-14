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
    path: path.join(__dirname, '.tmp/public/dist/'),
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
        test: /([a-z0-9]+)\.(ttf|eot|svg|woff)$/, // fonts files
        loader: 'file-loader?limit=100000',
      },
      {
        test: /\.jsx?$/, // react files
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react'],
        include: path.join(__dirname, 'assets'),
      },
    ],

    noParse: /\.min\.js/,
  },
};
