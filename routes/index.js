var express = require('express');
var router = express.Router();

exports.partials = function(req, res){
  var filename = req.params.filename;
  if(!filename) return;  // might want to change this
  res.render("/src/partials/" + filename );
};

module.exports = router;
