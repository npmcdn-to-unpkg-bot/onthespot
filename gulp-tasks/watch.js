var gulp = require('gulp');
var config = require('../config.js').config;
var Promise = require('es6-promise').Promise;
var watch = require('gulp-watch');
var rs = require('run-sequence');
//var browserSync = require('browser-sync').create();

gulp.task('watch', function(){

  // Application scripts
  watch(config.scripts.app, function(){
    rs('scripts:app','inject');
  });

  // Vendor scripts
  watch(config.scripts.vendor, function(){
    rs('scripts:vendor','inject');
  });

  // Application styles
  watch(config.styles.app, function(){
    rs('styles:app','inject');
  });

  // Vendor styles
  watch(config.styles.vendor, function(){
    rs('scripts:vendor','inject');
  });

  // Views
  watch(config.views.root, function(){
    rs('copy','inject');
  });
  watch(config.views.templates, function(){
    rs('templateCache')
  });

});