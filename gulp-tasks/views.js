var gulp = require('gulp');
var inject = require('gulp-inject');
var path = require('path');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');

gulp.task('inject', function(){
  var target = gulp.src('public/src/views/index.ejs');
  var sources = gulp.src([
    'public/dist/scripts/vendor.js',
    'public/dist/scripts/**/*.module.js',
    'public/dist/scripts/**/*.config.js',
    'public/dist/scripts/**/*.js',
    'public/dist/styles/**/*.css']
  );

  return target.pipe(inject(sources, {
    read: false,
    ignorePath: '/public/dist'
  }))
  .pipe(gulp.dest('public/dist/views'));
});

gulp.task('views:watch', function(){
  return watch('public/src/views/**/*.*', function(events, done){
    runSequence('copy', 'inject', done);
  })
});

gulp.task('views', ['inject', 'views:watch']);