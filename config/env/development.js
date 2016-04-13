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

module.exports.port = 3000;

module.exports.session = {
  secret: '451af640c5207f55e4c64635bda23492',

  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },

  adapter: 'mongo',
  host: 'localhost',
  port: 27017,
  db: 'squareshot',
  collection: 'sessions',
};
