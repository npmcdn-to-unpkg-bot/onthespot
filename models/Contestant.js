var mongoose = require('mongoose');

var ContestantSchema = new mongoose.Schema({
  name: String
});

mongoose.model('Contestant', ContestantSchema);