(function() {
  'use strict';

  var gulp = require('gulp');
  var serve = require('gulp-serve');
  var sass = require('gulp-sass');
  var header = require('gulp-header');

  var pkg = {};
  var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @author <%= pkg.author %>',
    ' * @version v<%= pkg.version %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''].join('\n');


  gulp.task('minify', function() {
    pkg = require('./package.json');

    return gulp.src('./build/**/*.css')
      .pipe(header(banner, {pkg : pkg}))
      .pipe(gulp.dest('./dist'));
  });

  gulp.task('serve', serve('test'));

  gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build'));
  });

  gulp.task('watch', ['serve'], function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
  })

  gulp.task('test', ['serve']);

  gulp.task('build', ['sass', 'minify']);

  gulp.task('default', ['sass']);
})();