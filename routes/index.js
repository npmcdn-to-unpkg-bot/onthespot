var express = require('express');
var router = express.Router();

exports.index = function(req, res){
  res.render('index');
};
exports.partials = function(req, res){
  var filename = req.params.filename;
  if(!filename) return;  // might want to change this
  res.render("/public/src/partials/" + filename );
};
