var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var debug = require('gulp-debug');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var config = require('../config');

var stylesRoot = config.styles;

gulp.task('styles:app', function () {
  var appDist = config.dist + '/styles';

  return gulp.src(stylesRoot.app)
    .pipe(debug())
    .pipe(changed(appDist))
    .pipe(plumber())
    .pipe(concat('app.css'))
    .pipe(sass())
    .pipe(gulp.dest(appDist));
});

gulp.task('styles:vendor', function () {
  var vendorDist = config.dist + '/styles';

  return gulp.src(stylesRoot.vendor)
    .pipe(changed(vendorDist))
    .pipe(concat('vendor.css'))
    .pipe(sass({
      includePaths: config.styles.vendorIncludes
    }))
    .pipe(csso())
    .pipe(gulp.dest(vendorDist));
});
gulp.task('styles', ['styles:app', 'styles:vendor']);