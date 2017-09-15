const gulp = require('gulp');
const zip = require('gulp-zip');
const runSequence = require('run-sequence');
const del = require('del');


gulp.task('move-src', function () {
  return gulp.src('./src/**/*')
  .pipe(gulp.dest('./dist/src'));
});

gulp.task('move-help', function () {
  return gulp.src('./help/**/*')
  .pipe(gulp.dest('./dist/help'));
});

gulp.task('zip', function () {
  return gulp.src('./dist/**/*')
  .pipe(zip('archive.zip'))
  .pipe(gulp.dest('./dist'))
});

gulp.task('cleanup', function () {
  return del([
    './dist/src',
    './dist/help'
  ]);
});



gulp.task('default', function (done) {
  return runSequence(
    'move-src',
    'move-help',
    'zip',
    'cleanup',
    done);
});

