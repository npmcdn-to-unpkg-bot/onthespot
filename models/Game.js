var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
  category: String,
  contestants: [{type: mongoose.Schema.Types.ObjectId, refs: 'Contestant'}],
  questions: [{ type: mongoose.Schema.Types.ObjectId, refs: 'Question'}]
});

mongoose.model('Game', GameSchema);