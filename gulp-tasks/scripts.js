var gulp = require('gulp');
var babel = require('gulp-babel');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
//var browserSync = require('browser-sync').create();
var scriptsConfig = require('../config.js').config.scripts;

var dist = 'public/dist/scripts';

gulp.task('scripts:vendor', function () {
  return gulp.src(scriptsConfig.vendor)
    .pipe(changed(dist))
    .pipe(plumber())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(dist))
});

gulp.task('scripts:app', function () {
  return gulp.src(scriptsConfig.app)
    .pipe(changed(dist))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({
      plugins: ['check-es2015-constants'],
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write())
    .pipe(annotate())
    //.pipe(gulpif(release, uglify()))
    .pipe(gulp.dest(dist))
});

gulp.task('scripts', ['scripts:vendor', 'scripts:app']);