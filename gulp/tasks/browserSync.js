var config      = require('../config');

gulp.task('browserSync', function() {
  plugin.browserSync(config.browserSync);
});