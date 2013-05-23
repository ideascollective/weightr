var User = require('../models/user.js'),
    passport = require('passport');

/*
 * GET users listing.
 */

exports.list = function(req, res){
  User.find(1);

  res.send("respond with a resource");
};

exports.register = function(req, res) {
  User.generateHash('password', function(err, pw) {
    User.create({ username: 'user', password: pw }).success(function(user){
      return res.redirect('/');
    }).error(function(error){
      console.log(error);
      res.redirect('/');
    });
  });
};

exports.login = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      console.log('Error: user doesnt exist. ' + info.message);

      return res.redirect('/');
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }

      return res.redirect('/');
    });
  })(req, res, next);
};

exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};
