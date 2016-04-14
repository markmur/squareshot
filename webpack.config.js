const ENV = process.env.NODE_ENV;

if (ENV === 'production' || ENV === 'local-prod') {
  module.exports = require('./webpack.config.production.js');
} else {
  module.exports = require('./webpack.config.base.js');
}
