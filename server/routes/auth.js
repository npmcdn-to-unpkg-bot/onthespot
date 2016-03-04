var express = require('express');
var tokenGenerator = require('../utils/auth/tokenGenerator');
var router = express.Router();

router.post('/generate', function(req, res, next){
  if(!req.body.user) return next(new Error('user property must be defined.'));

  res.json({
    token: tokenGenerator.generate(req.body.user)
  })
});

module.exports = router;