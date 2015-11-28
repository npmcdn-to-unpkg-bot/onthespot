var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  title: String,
  name: String,
  questions: [{ type: mongoose.Schema.Types.ObjectId, refs: 'Question' }]
});

mongoose.model('Category', CategorySchema);
/*
  new Category({
    title: 'Web Programming',
    name: 'AngularJS'
  })
 */