var Sequelize = require("../config/seqConfig.js").Sequelize,
    database = require("../config/seqConfig.js").database,
    Profile = require('./profile.js'),
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;


var User = database.define('User', {
  username: {type: Sequelize.STRING, unique: true},
  password: Sequelize.STRING
}, {
  classMethods: {
    generateHash: function(value, callback) {
      bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) callback(err, null);

        bcrypt.hash(value, salt, function(err, hash) {
          if(err) callback(err, null);

          callback(null, hash);
        });
      });
    }
  },
  instanceMethods: {
    comparePassword: function(candidatePassword, callback) {
      var that = this;

      bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) return callback(err);

        callback(null, isMatch);
      });
    }
  }
});

User.hasMany(Profile, {as: 'profile'});

User.sync();

database.sync().success(function() {
  console.log('Successfully created Table User');
}).error(function(error) {
  console.log('Failed creating Table User');
});

module.exports = User;
