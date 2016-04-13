module.exports = {
  index: function (req, res) {
    return res.view({
      bundle: require('../../assets.json').main.js,
      user: req.session.user,
    });
  },
};
