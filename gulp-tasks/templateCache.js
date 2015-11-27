var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');
var templateCache = require('gulp-angular-templatecache');
var config = require('../config.js').config;

gulp.task('templateCache', function () {
  return gulp.src(config.views.templates)
    .pipe(minifyHtml({
      empty: true,
      quotes: true
    }))
    .pipe(templateCache({
      root: 'templates/',
      standalone: true,
      module: 'ots.templates'
    }))
    .pipe(gulp.dest('public/dist/scripts'));
});