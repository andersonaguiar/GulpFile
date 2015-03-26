var config      = require('../../config');

// Get and render all .styl files recursively
gulp.task('stylus', function () {
  gulp.src(config.preprocessor.src)
  .pipe($.stylus({
    use: $.nib(),
    compress: true
  }))
  .pipe($.size())
  .pipe(gulp.dest(config.preprocessor.dest))
  .pipe($.browserSync.reload({stream:true}));
});
