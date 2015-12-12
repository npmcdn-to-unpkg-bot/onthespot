var jwt = require('jsonwebtoken');
var jwtUtils = require('./jwt-utils');

module.exports = function(req, res, next){
  jwtUtils.extract(req, function(err, token){
    if(err) return next(err);

    jwt.verify(token, jwtUtils.secret, function(err, decoded){
      if(err) return next(err);

      // Just to mess with tampered tokens
      if(!decoded) return next(err);

      return next();
    })
  })
}