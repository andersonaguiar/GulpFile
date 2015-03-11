var config      = require('../../config');

gulp.task('sass', function () {
  gulp.src(config.global.preprocessor.src)
  .pipe(plugin.sass())
  .pipe(gulp.dest(config.global.preprocessor.dest));
});