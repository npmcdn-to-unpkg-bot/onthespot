var mongoose = require('mongoose');

var ContestantSchema = new mongoose.Schema({
  name: String,
  host: Boolean
});

mongoose.model('Contestant', ContestantSchema);