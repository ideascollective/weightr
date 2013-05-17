var Sequelize = require("../config/seqConfig.js").Sequelize,
    database = require("../config/seqConfig.js").database,
     WeightRecord = require("./weightRecord.js");

var Profile = database.define('Profile', {
  Name: Sequelize.STRING,
  profilePhoto: Sequelize.STRING
});

Profile.hasMany(WeightRecord, {as: 'weight'});

Profile.sync();

database.sync().success(function() {
  console.log('Successfully created Table Profile');
}).error(function(error) {
  console.log('Failed creating Table Profile');
});

module.exports = Profile;
