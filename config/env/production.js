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
  port: process.env.PORT || 3000,

  grunt: {
    _hookTimeout: 120 * 1000,
  },

  session: {
    secret: 'mylovelyhorse',
    adapter: 'mongo',
    url: process.env.MONGO_URI,
    collection: 'sessions',
  },

  log: {
    level: 'silent',
  },

  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  redirect_uri: process.env.REDIRECT_URI,
};
