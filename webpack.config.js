console.log('ENV:', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./webpack.config.production.js');
} else {
  module.exports = require('./webpack.config.base.js');
}
