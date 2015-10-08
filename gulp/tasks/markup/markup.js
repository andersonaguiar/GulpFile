gulp.task('markup', () => {
  return gulp.src(config.markup.src)
    .pipe(gulp.dest(config.markup.dest));
});
