gulp.task('babel', () => {
  return gulp.src(config.js.src)
    .pipe($.babeljs())
    .pipe(gulp.dest(config.js.dest));
});
