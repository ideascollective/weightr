var Sequelize = require("../config/seqConfig.js").Sequelize,
    database = require("../config/seqConfig.js").database,
    Profile = require('./profile.js');


var User = database.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

User.hasMany(Profile, {as: 'profile'});

User.sync();

database.sync().success(function() {
  console.log('Successfully created Table User');
}).error(function(error) {
  console.log('Failed creating Table User');
});

module.exports = User;
