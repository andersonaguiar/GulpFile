var config  = require('../../config');

gulp.task('zip', function () {
  return gulp.src(config.zip.src)
  .pipe(plugin.zip(config.zip.name))
  .pipe(gulp.dest(config.zip.dest));
});