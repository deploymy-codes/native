var gulp = require( 'gulp' );

gulp.task( 'through', function () {
  return gulp.src( [
    './app/index.html',
    './package.json'
  ] ).pipe( gulp.dest( './compile' ) );
} );
