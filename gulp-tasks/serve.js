var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();

gulp.task('serve', function (cb) {
  var started = false;
  return nodemon({
    script: 'app.js'
  }).on('start', function () {
    if (!started) {
      cb();
      started = true;
    }
  });
});

//gulp.task('serve', ['nodemon'], function () {
//  browserSync.init(null, {
//    proxy: "http://localhost.ots",
//    files: ["public/dist/**/*.*"],
//    browser: "google chrome"
//  });
//});