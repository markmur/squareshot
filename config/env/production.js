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

module.exports = {
  port: 3000,

  grunt: {
    _hookTimeout: 30 * 1000,
  },

  session: {
    adapter: 'mongo',
    url: process.env.MONGO_URI,
    collection: 'sessions',
  },

  log: {
    level: 'silent',
  },
};
