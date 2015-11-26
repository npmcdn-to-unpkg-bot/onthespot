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
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

var src = config.src + '/scripts';
var dist = config.dist + '/scripts';

var scriptsVendor = [
  'public/src/scripts/vendor/**/*.js',
  'public/bower/angular/angular.js',
  'public/bower/angular-aria/angular-aria.js',
  'public/bower/angular-animate/angular-animate.js',
  'public/bower/angular-material/angular-material.js',
  'public/bower/angular-ui-router/release/angular-ui-router.js',
  'public/bower/rxjs/dist/rx.all.js'
];

var scriptsApp = [
  '!public/src/scripts/vendor/**/*.js',
  src + '/**/*.module.js',
  src + '/**/*.config.js',
  src + '/**/*.js'
];

gulp.task('scripts:vendor', function () {
  return gulp.src(scriptsVendor)
    .pipe(changed(dist))
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(dist))
});

gulp.task('scripts:app', function () {
  return gulp.src(scriptsApp)
    .pipe(changed(dist))
    .pipe(sourcemaps.init())
    .pipe(annotate())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write())
    //.pipe(gulpif(release, uglify()))
    .pipe(gulp.dest(dist))
    .pipe(browserSync.stream())
});

gulp.task('scripts:watch', function(){
  return watch(scriptsApp, function(events, done){
    gulp.start('scripts:app')
  })
});

gulp.task('scripts', ['scripts:vendor', 'scripts:app', 'scripts:watch']);