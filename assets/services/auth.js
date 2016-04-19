export default {

  isLoggedIn: function (done) {
    io.socket.get('/user/index', res => {
      done(res);
    });
  },

  logout: function () {
    io.socket.get('/user/logout', res => {
      window.location.pathname = '/';
    });
  },

  onChange: function () {

  },
};
