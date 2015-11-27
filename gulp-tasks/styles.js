var gulp = require('gulp');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var styleConfig = require('../config.js').config.styles;
var changed = require('gulp-changed');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles:app', function () {
  var dist = 'public/dist/styles';

  return gulp.src(styleConfig.app)
    .pipe(changed(dist))
    .pipe(sass()
      .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(concat('app.css'))
    .pipe(csso())
    .pipe(gulp.dest(dist));
});
gulp.task('styles:vendor', function () {
  return gulp.src(styleConfig.vendor)
    .pipe(csso())
    .pipe(gulp.dest('public/dist/styles'))
});

gulp.task('styles', ['styles:app', 'styles:vendor']);