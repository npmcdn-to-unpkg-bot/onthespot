var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../config');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');

gulp.task('bundle', function () {
  var output = config.scripts.vendor;

  return gulp.src(output)
    .pipe(plumber())
    .pipe(changed(output))
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest(output + '/scripts'))
});