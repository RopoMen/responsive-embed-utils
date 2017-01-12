(function() {
  'use strict';

  var gulp = require('gulp');
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

  gulp.task('sass-main', function () {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build'));
  });

  gulp.task('sass-test', function () {
    return gulp.src('./test/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./test/css'));
  });

  gulp.task('watch', function() {
    gulp.watch(['./sass/**/*.scss', './test/scss/**/*.scss'], ['sass']);
  })

  gulp.task('sass', ['sass-main', 'sass-test']);

  gulp.task('build', ['sass', 'minify']);

  gulp.task('default', ['sass']);
})();