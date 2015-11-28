var express = require('express');
var router = express.Router();

router.post('/auth', function(req, res){
  console.log('Logging in...')
})

module.exports = router;