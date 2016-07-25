var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var minifyCss = require('gulp-clean-css');

gulp.task('less',function() {
  gulp.src('src/lazyColor.less')
  .pipe(less())
  .pipe(gulp.dest('dist'))
});

gulp.task('build',function() {
  gulp.src('src/lazyColor.less')
  .pipe(less())
  .pipe(gulp.dest('dist'))
})

gulp.task('watch',function() {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
  gulp.watch('src/lazyColor.less',['less']);
  gulp.watch('dist/**', function() {
    browserSync.reload();
  });
})
