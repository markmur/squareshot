const request = require('request');
const url = require('url');
const colors = require('colors');

module.exports = {

  url: {
    protocol: 'https:',
    host: 'api.instagram.com',
    query: {
      client_id: sails.config.client_id,
      count: 32,
    },
  },

  _req: function (method, path, token, params) {

    this.url.pathname = path;

    if (token) {
      this.url.query['access_token'] = token;
      delete this.url.query.client_id;
    }

    for (var param in params) {
      this.url.query[param] = params[param];
    }

    var path = url.format(this.url);

    console.log(path);

    return new Promise((resolve, reject) => {
      request({ method: (method || 'GET'), url: path }, function (error, response, body) {
        if (error) {
          reject(error);
        }	else {
          resolve(JSON.parse(body));
        }
      });
    });
  },

  ////////////////////////////
  /// 	User Services			 ///
  ////////////////////////////
  feed: function (token, next) {
    if (!token) throw 'access_token required for user feed';

    var params = {};

    if (next) params.next_max_id = next;

    return this._req('GET', '/v1/users/self/feed', token, params);
  },

  profile: function (id, token) {
    return this._req('GET', `/v1/users/${id}/media/recent`, token);
  },

  liked: function (token) {
    return this._req('GET', '/v1/users/self/media/liked', token);
  },

  following: function (id, token) {
    return this._req('GET', `/v1/users/${id}/follows`, token);
  },

  followers: function (id, token) {
    return this._req('GET', `/v1/users/${id}/followed-by`, token);
  },

  like: function (mediaId, token) {
    return this._req('POST', `/v1/media/${mediaId}/likes`, token);
  },

  unlike: function (mediaId, token) {
    return this._req('DELETE', `/v1/media/${mediaId}/likes`, token);
  },

  ////////////////////////////
  /// 	     General			 ///
  ////////////////////////////

  popular: function (token) {
    return this._req('GET', '/v1/media/popular', (token || null));
  },

  searchHashtags: function (hashtag, token) {
    return this._req('GET', '/v1/tags/search', (token || null), { q: hashtag });
  },

  hashtag: function (hashtag, token) {
    return this._req('GET', `/v1/tags/${hashtag}/media/recent`, (token || null));
  },

  searchUsers: function (user, token) {
    return this._req('GET', '/v1/users/search', (token || null), { q: user });
  },

  findUser: function (id, token) {
    return this._req('GET', `/v1/users/${id}`, (token || null));
  },

  user: function (id, token) {
    return this._req('GET', `/v1/users/${id}/media/recent`, (token || null));
  },

  ////////////////////////////
  /// 	   Locations			 ///
  ////////////////////////////
  searchLocation: function (coords, foursquare, token) {
    var path = '/v1/';
    return this._req('GET', path, (token || null));
  },

  location: function (id, token) {
    var path = `/v1/locations/${id}/media/recent`;
    return this._req('GET', path, (token || null));
  },

  locationInfo: function (id, token) {
    var path = '/v1/locations/' + id;
    return this._req('GET', path, (token || null));
  },

};
