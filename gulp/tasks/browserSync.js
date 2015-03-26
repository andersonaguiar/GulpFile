var config      = require('../config');

gulp.task('browserSync', function() {
  $.browserSync(config.browserSync);
});
