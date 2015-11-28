var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Game = require('../models/Game');

// Create
router.post('/create', function (req, res) {
  console.log('Creating game', req.body);

  var game = new Game(req.body);
  game.save(function (err, game) {
    if (err) return next(err);
    res.json({status: 200, game: game})
  })
});

// Index
router.get('/', function (req, res) {
  res.json({games: []})
});

module.exports = router;