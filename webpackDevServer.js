const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');

var PORT = config.PORT;

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': 'http://localhost:1337' },
}).listen(PORT, 'localhost', function (err, result) {
  if (err) console.log(err);

  console.log(`Listening at localhost:${PORT}`);
});
