var User = require('../models/user.js');
/*
 * GET users listing.
 */

exports.list = function(req, res){
  User.find(1);
  res.send("respond with a resource");
};
