var gulp = require('gulp');
var req = require('require-dir');
var runSequence = require('run-sequence');

var tasks = req('./gulp-tasks');

gulp.task('default', function(cb){
  runSequence('clean',
    ['copy', 'scripts', 'styles', 'templateCache'],
    'inject',
    'watch',
    cb);
});