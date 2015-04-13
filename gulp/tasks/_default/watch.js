var config = require('../../config');

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
});
