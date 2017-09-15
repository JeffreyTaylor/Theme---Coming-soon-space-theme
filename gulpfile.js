const gulp = require('gulp');
const zip = require('gulp-zip');
const runSequence = require('run-sequence');
const del = require('del');


gulp.task('move-src', function () {
  return gulp.src('./src/**/*')
  .pipe(gulp.dest('./dist/files/src'));
});

gulp.task('move-help', function () {
  return gulp.src('./help/**/*')
  .pipe(gulp.dest('./dist/files/help'));
});

gulp.task('move-marketing', function () {
  return gulp.src('./marketing/**/*')
  .pipe(gulp.dest('./dist'));
});

gulp.task('zip-files', function () {
  return gulp.src('./dist/files/**/*')
  .pipe(zip('file-archive.zip'))
  .pipe(gulp.dest('./dist'))
});

gulp.task('zip-preview-images', function () {
  return gulp.src('./dist/preview*')
  .pipe(zip('image-archive.zip'))
  .pipe(gulp.dest('./dist'))
});

gulp.task('cleanup', function () {
  return del([
    './dist/files',
    './dist/preview*'
  ]);
});



gulp.task('default', function (done) {
  return runSequence(
    'move-src',
    'move-help',
    'move-marketing',
    'zip-files',
    'zip-preview-images',
    'cleanup',
    done);
});

