var config = require('../../config');

gulp.task('esformatter', function () {
  return gulp.src(config.esformatter.src)
    .pipe(plugin.esformatter({
      // configs
    }))
    .pipe(gulp.dest(config.esformatter.dest));
});