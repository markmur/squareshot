const request = require('request');
const URL     = require('url');
const locals  = require('../../locals.js');

module.exports = {

  index: function (req, res) {

    var isAuthenticated = req.session.authenticated || false;
    var user;

    if (isAuthenticated) {
      user = req.session.user;
    }

    return res.send({
      user: user,
      isLoggedIn: isAuthenticated,
    });
  },

  auth: function (req, res) {

    var data = {
      client_secret: locals.client_secret,
      client_id: locals.client_id,
      grant_type: 'authorization_code',
      redirect_uri: locals.redirect_uri,
      code: req.query.code,
      scope: 'likes+comments+relationships',
    };

    var options = {
      uri: 'https://api.instagram.com/oauth/access_token',
      method: 'POST',
      form: data,
    };

    sails.log.info('Login Request ::', URL.format(options));

    var currentRoute = req.route.path;

    request.post(options, function (err, response, body) {
      if (err) {
        return res.serverError(err);
      }

      body = JSON.parse(body);

      if (body.code >= 400) {
        return res.serverError(body.error_message);
      }

      sails.log.info('Instagram Response ::', body);

      var token = body.access_token;
      var user = body.user;

      req.session.token = token;
      req.session.user = user;

      return res.redirect('/');
    });
  },

  logout: function (req, res) {
    req.session.destroy();
    return res.send({
      loggedOut: true,
    });
  },
};
