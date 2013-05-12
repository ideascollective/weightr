
/*
 * GET a user's Profile by ID
 */
exports.get = function(req, res){
  var o = {};

  if (req.user) {
    o.logged = 'true';
    o.user = req.user.username;
  }
  else {
    o.logged = 'false';
  }

  res.send(o);
};
