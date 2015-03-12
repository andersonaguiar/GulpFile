var config      = require('../../config');

gulp.task('sass', function () {
  gulp.src(config.preprocessor.src)
  .pipe(plugin.sass())
  .pipe(plugin.size())
  .pipe(gulp.dest(config.preprocessor.dest))
  .pipe(plugin.browserSync.reload({stream:true}));
});