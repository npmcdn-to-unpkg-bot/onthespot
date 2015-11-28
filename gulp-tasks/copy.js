var gulp = require('gulp');
var config = require('../config.js').config;

gulp.task('copy', function () {
  gulp.src([config.views.root, config.fonts], {read: false})
    .pipe(gulp.dest('public/dist'))
});