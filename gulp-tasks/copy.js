var gulp = require('gulp');

gulp.task('copy', function(){
  gulp.src(['public/src/views/**/*.{html,ejs}'])
  .pipe(gulp.dest('public/dist/views'))
});