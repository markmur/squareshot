/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

const locals = require('../../locals');

module.exports = {
  port: 3000,

  grunt: {
    _hookTimeout: 120 * 1000,
  },

  session: {
    secret: locals.session_secret,
    adapter: 'mongo',
    url: locals.mongo_uri,
    collection: 'sessions',
  },

  log: {
    level: 'info',
  },

  client_id: locals.client_id,
  client_secret: locals.client_secret,
  redirect_uri: locals.redirect_uri,
};
