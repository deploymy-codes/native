var gulp = require('gulp');
var config = require('../config').through;

gulp.task('through', function () {
  return gulp.src(config.src).pipe(gulp.dest(config.dest));
});
