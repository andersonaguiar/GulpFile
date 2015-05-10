var reload = $.browserSync.reload;

gulp.task('watch', function(callback) {
  // sass|stylus
  gulp.watch(config.preprocessor.src, [config.preprocessor.choice]);

  // images
  gulp.watch(config.images.src, ['images']);

  // js
  gulp.watch(config.js.src, ['jshint', 'uglifyJs']);

  // js tests
  gulp.watch(config.tests.src, ['test']);

  // markup
  gulp.watch(config.markup.src, ['markup']);

  // browser sync
  gulp.watch(config.markup.src).on('change', reload);
  gulp.watch(config.preprocessor.dest + '/**/*.css').on('change', reload);
  gulp.watch(config.js.dest + '/**/*.js').on('change', reload);
});
