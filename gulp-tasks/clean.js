var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(){
  del(['public/dist']).then(function(paths){
    console.log('Deleted files and folders:\n', paths.join('\n'));
  })
});