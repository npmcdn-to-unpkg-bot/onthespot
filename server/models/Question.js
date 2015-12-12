var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  category: String,
  amount: Number,
  question: String,
  answer: String
});

mongoose.model('Question', QuestionSchema);