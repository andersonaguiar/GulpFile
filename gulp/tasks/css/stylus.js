var config      = require('../../config');

// Get and render all .styl files recursively
gulp.task('stylus', function () {
  gulp.src(config.preprocessor.src)
  .pipe(plugin.stylus({
    use: plugin.nib(),
    compress: true
  }))
  .pipe(plugin.size())
  .pipe(gulp.dest(config.preprocessor.dest))
  .pipe(plugin.browserSync.reload({stream:true}));
});
