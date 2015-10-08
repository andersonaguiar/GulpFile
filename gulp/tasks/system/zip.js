gulp.task('zip', () => {
  return gulp.src(config.zip.src)
    .pipe($.zip(config.zip.name))
    .pipe(gulp.dest(config.zip.dest));
});
