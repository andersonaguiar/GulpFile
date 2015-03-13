var config = require('../../config');

gulp.task('esformatter', function() {
  return gulp.src(config.esformatter.src)
    .pipe(plugin.esformatter({
      // configs
      plugins: [
        "esformatter-quotes"
      ],
      quotes: {
        type: "single",
        avoidEscape: false
      }
    }))
    .pipe(gulp.dest(config.esformatter.dest));
});