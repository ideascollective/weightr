var Sequelize = require("../config/seqConfig.js").Sequelize,
    database = require("../config/seqConfig.js").database;

var WeightRecord = database.define('Weight', {
  Date: Sequelize.DATE,
  weight: Sequelize.FLOAT
});


WeightRecord.sync();

database.sync().success(function() {
  console.log('Successfully created Table Profile');
}).error(function(error) {
  console.log('Failed creating Table Profile');
});

module.exports = WeightRecord;
