var gulp = require('gulp');
var babel = require('gulp-babel');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var config = require('../config');
var annotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');

var src = config.src + '/scripts';
var dist = config.dist + '/scripts';

var vendor = [
  'public/bower/angular/angular.js',
  'public/bower/angular-animate/angular-animate.js',
  'public/bower/angular-aria/angular-aria.js',
  'public/bower/angular-material/angular-material.js',
  'public/bower/angular-ui-router/release/angular-ui-router.js'
];

gulp.task('scripts:vendor', function () {
  return gulp.src(vendor)
    .pipe(changed(dist))
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(dist))
});

gulp.task('scripts:app', function () {
  return gulp.src([
    src + '/**/*.config.js',
    src + '/**/*.js'
  ])
    .pipe(changed(dist))
    .pipe(sourcemaps.init())
    .pipe(annotate())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write())
    //.pipe(gulpif(release, uglify()))
    .pipe(gulp.dest(dist));
});

gulp.task('scripts', ['scripts:vendor', 'scripts:app']);