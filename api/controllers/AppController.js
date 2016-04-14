module.exports = {
  index: function (req, res) {
    return res.view('app/index.ejs', {
      bundle: require('../../assets.json').main.js,
      user: req.session.user,
    });
  },
};
