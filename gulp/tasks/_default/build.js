gulp.task(
  'build',
  [
    'clean',
    'images',
    'uglifyJs',
    config.preprocessor.choice
  ], () => {}
);
