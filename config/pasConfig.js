var User = require('../models/user.js'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;


// Passport session setup.
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.find(id).success(function(user) {
    done(null, user);
  }).error(function(error){
    done('User doenst exist', null);
  });
});


passport.use(new LocalStrategy(function(name, password, done) {
  User.find({ where: {username: name} }).success(function(user) {
    if (!user) { return done(null, false, { message: 'Unknown user ' + name }); }

    user.comparePassword(password, function(err, isMatch){
      if (err) return done(err);

      if(isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Invalid password' });
      }
    });

  }).error(function(error){
    return done(error);
  });
}));