var gulp = require('gulp');
var NwBuilder = require( 'node-webkit-builder' );
var config = require('../config.js').sass;

gulp.task('build', ['browserify', 'through', 'styles', 'through'], function() {
  var nw = new NwBuilder({
    files: './dist/**/*',
    platforms: ['osx64'],
    version: ( process.env.NODE_ENV === 'production' ) ? 'latest' : 'v0.10.5'
  });
  return nw.build();
});
