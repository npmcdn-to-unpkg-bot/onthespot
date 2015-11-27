var gulp = require('gulp');
var inject = require('gulp-inject');
var path = require('path');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var config = require('../config.js').config;

gulp.task('inject', function(){
  var target = gulp.src('public/src/views/index.ejs');
  var sources = gulp.src(config.injections);

  return target.pipe(inject(sources, {
    read: false,
    ignorePath: '/public/dist'
  }))
  .pipe(gulp.dest('public/dist/views'));
});