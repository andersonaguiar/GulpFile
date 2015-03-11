var config      = require('../../config');

// Get and render all .styl files recursively
gulp.task('stylus', function () {
  gulp.src(config.global.preprocessor.src)
  .pipe(plugin.stylus({
    use: plugin.nib(),
    compress: true
  }))
  .pipe(gulp.dest(config.global.preprocessor.dest))
  .pipe(plugin.browserSync.reload({stream:true}));
});
