var express = require('express');
var router = express.Router();

module.exports = {
  index: function(req, res){
    res.render('index');
  },
  partials: function(req, res){
    var filename = req.params.filename;
    if(!filename) return;  // might want to change this
    res.render("/public/dist/views/partials/" + filename );
  }
};