var jwt = require('jsonwebtoken');
var _ = require('lodash');

// Set the JWT key
// tr -dc a-zA-Z0-9$!@+ < /dev/urandom | head -c 64 | xargs
var secret = 'Xli3X8ojqB4Z1Nho71O@Dw4aRh06@+aGW@@pPOVaUULQRNO9UhA+v@Ut+aExVxcl';

module.exports = {
  secret : secret,
  create : function(user){
    // Token data
    return jwt.sign(user, secret, {
      iss : user._id,
      aud : 'acn',
      username : user.penName
    });
  },
  createFromDecoded : function(decodedJwt){

  },
  extract : function(req, cb){
    var authHeader = req.headers.authorization;

    // Throw new 404 (?) if no auth token is found
    if(_.isEmpty(authHeader))
      return cb(new Error(), null);

    var token = authHeader.split(' ')[1];
    cb(null, token);
  }
}