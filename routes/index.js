<<<<<<< HEAD
module.exports = function(app) {
  require('./user')(app);
};
=======

/*
 * GET home page.
 */

exports.index = function(req, res){
  var message = (req.user) ? 'Logged in as: ' + req.user.username : null;

  res.render('index', { title: 'Weightr', status: message });
};
>>>>>>> 3a314ac8fd437793e38542995b40b76728d1eaab
