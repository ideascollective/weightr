
/*
 * GET a user's Profile by ID
 */
exports.get = function(req, res){
  var user = {};

  if (req.user) {
    user.logged = 'true';
    user.user = req.user.username;
  }
  else {
    user.logged = 'false';
  }

  res.send(user);
};
