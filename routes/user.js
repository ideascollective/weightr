<<<<<<< HEAD
var UserServices = require('../services/user.js'),
  Passport = require('passport'),
  check = require('validator').check,
  sanitize = require('validator').sanitize;

module.exports = function(app) {
  app.post('/users', create);
  app.post('/users/login', login);
  app.post('/users/logout', logout);
};

var create = function(req, res) {
  var userName = sanitize(req.body.username).xss().trim(),
    password = sanitize(req.body.password).xss().trim();

  check(userName).notEmpty();
  check(password).len(4, 50);

  if (!password) {
    return res.json(400, {
      message: 'Please provide a non-empty password'
    });
  }

  UserServices.saveUser({
    username: userName,
    password: password,
    success: function(User) {
      return res.json(201, {
        username: User.username,
        createdAt: User.createdAt,
        updatedAt: User.updatedAt
      });
    },
    error: function(Error) {
      return res.json(500, Error);
    }
  });
};

=======
var User = require('../models/user.js'),
    passport = require('passport');
>>>>>>> 3a314ac8fd437793e38542995b40b76728d1eaab

/*
 * Authenticate user - service provided by passport
 */
var login = function(req, res) {
  Passport.authenticate('local', function(err, user, info) {
    if (err) {
      return res.json(403, {
        message: 'Authentication error',
        error: err
      });
    }

<<<<<<< HEAD
    if (!user) {
      return res.json(403, {
        message: 'The user does not exist',
        error: info
      });
    }

    req.logIn(user, function(err) {
      if (err) {
        return res.json(403, {
          message: 'Authentication error',
          error: err
        });
      }

      return res.json(200, {
          username: user.username,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
      });
    });
  })(req, res);
};

var logout = function(req, res) {
  req.logout();
  return res.json(200, {
      loggedOut: true
  });
};
=======
exports.list = function(req, res) {
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
>>>>>>> 3a314ac8fd437793e38542995b40b76728d1eaab
