<<<<<<< HEAD
var Sequelize = require('../config/sequelizeConfig.js').Sequelize,
    database = require('../config/sequelizeConfig.js').database,
=======
var Sequelize = require("../config/seqConfig.js").Sequelize,
    database = require("../config/seqConfig.js").database,
>>>>>>> 3a314ac8fd437793e38542995b40b76728d1eaab
    Profile = require('./profile.js'),
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;


var User = database.define('User', {
<<<<<<< HEAD
    UserId: {type: Sequelize.INTEGER, unique: true, autoIncrement: true},
    username: {type: Sequelize.STRING, primaryKey: true},
    password: {type: Sequelize.STRING, allowNull: false}
  },
  {
    classMethods: {
      generateHash: function(value, callback) {
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
          if (err) {
            callback(err, null);
          }
          bcrypt.hash(value, salt, function(err, hash) {
            if (err) {
              callback(err, null);
            }
            callback(null, hash);
          });
        });
      }
    },
    instanceMethods: {
      comparePassword: function(candidatePassword, callback) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
          if (err) {
            return callback(err);
          }
          callback(null, isMatch);
        });
      }
    }
  }
);
=======
  username: { type: Sequelize.STRING, unique: true },
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
>>>>>>> 3a314ac8fd437793e38542995b40b76728d1eaab

User.hasOne(Profile, {as: 'profile'});
Profile.belongsTo(User);

User.sync();

database.sync().success(function() {
  console.log('Successfully created Table User');
}).error(function(error) {
  console.log('Failed creating Table User. ' + error);
});

module.exports = User;
