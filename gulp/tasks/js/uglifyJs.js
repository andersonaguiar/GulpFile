gulp.task('uglifyJs', () => {
  return gulp.src(config.js.dest + '/**/*.js')
    .pipe($.uglify({ outSourceMap: true }))
    .pipe(gulp.dest(config.js.dest))
    .pipe($.size())
});
