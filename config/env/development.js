/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

const locals = require('../../locals');

module.exports.port = 3000;

module.exports.paths = {
  public: 'dist/',
};

module.exports.session = {
  secret: locals.session_secret,

  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },

  adapter: 'mongo',
  host: 'localhost',
  port: 27017,
  db: 'squareshot',
  collection: 'sessions',
};

module.exports = {
  client_id: locals.client_id,
  client_secret: locals.client_secret,
  redirect_uri: locals.redirect_uri,
};
