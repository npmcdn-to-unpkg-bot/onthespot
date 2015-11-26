var gulp = require('gulp');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

var app = [
  'public/src/styles/**/*.css'
];

var vendor = [
  'public/bower/angular-material/angular-material.css'
];

gulp.task('styles:app', function () {
  return gulp.src(app)
    .pipe(concat('app.css'))
    .pipe(csso())
    .pipe(gulp.dest('public/dist/styles'));
});
gulp.task('styles:vendor', function () {
  return gulp.src(vendor)
    .pipe(csso())
    .pipe(gulp.dest('public/dist/styles'))
});

gulp.task('styles:watch', function(){
  return watch(app[0], function(events, done){
    gulp.start('styles:app', done)
  })
});
gulp.task('styles', ['styles:app', 'styles:vendor', 'styles:watch']);