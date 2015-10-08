gulp.task('images', () => {
  return gulp.src(config.images.src)
    .pipe($.changed(config.images.dest))
    .pipe($.imagemin())
    .pipe(gulp.dest(config.images.dest));
});
