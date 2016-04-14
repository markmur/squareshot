module.exports = {
  index: function (req, res) {

    console.log(__dirname);

    return res.view('app/index.ejs', {
      bundle: require('../../assets.json').main.js,
      user: req.session.user,
    });
  },
};
