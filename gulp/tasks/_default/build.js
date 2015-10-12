gulp.task(
  'build',
  [
    'clean',
    'images',
    config.preprocessor.choice
  ],
  $.gulpSequence('babel', 'uglifyJs')
);
