module.exports = {
  index: function (req, res) {

    if (req.session.user) {
      sails.log.debug(`${req.session.user.username} is logged in`);
    }

    return res.view('index.ejs', {
      bundle: require('../../assets.json').main.js
    });
  },
};
