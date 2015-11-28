var gulp = require('gulp');
var config = require('../config.js').config;
var Promise = require('es6-promise').Promise;

gulp.task('copy', function () {
  return Promise.all([
    gulp.src(config.views.root)
      .pipe(gulp.dest('public/dist/views')),
    gulp.src(config.fonts)
      .pipe(gulp.dest('public/dist/fonts'))
  ])
});