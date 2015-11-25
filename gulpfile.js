var gulp = require('gulp');
var req = require('require-dir');

var tasks = req('./gulp-tasks');

gulp.task('default', ['scripts']);