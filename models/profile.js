var Sequelize = require('../config/sequelizeConfig.js').Sequelize,
    database = require('../config/sequelizeConfig.js').database,
    WeightRecord = require("./weightRecord.js");

var Profile = database.define('Profile', {
  email: Sequelize.STRING,
  age: Sequelize.INTEGER,
  profilePhoto: Sequelize.STRING
});

Profile.hasMany(WeightRecord, {as: 'weight'});

Profile.sync();

database.sync().success(function() {
  console.log('Successfully created Table Profile');
}).error(function(error) {
  console.log('Failed creating Table Profile. ' + error);
});

module.exports = Profile;