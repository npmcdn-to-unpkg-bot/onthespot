var express = require('express');
var router = express.Router();

router.post('/user', function(req, res){
  console.log('Creating new user:', req.user);
});

module.exports = router;