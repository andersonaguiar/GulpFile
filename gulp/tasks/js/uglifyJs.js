gulp.task('uglifyJs', function() {
  return gulp.src(config.js.src)
    .pipe($.uglify({ outSourceMap: true }))
    .pipe(gulp.dest(config.js.dest))
    .pipe($.size())
});
